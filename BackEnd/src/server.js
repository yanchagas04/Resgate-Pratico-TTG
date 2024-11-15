const express = require('express');
const app = express();
const PORT = 3000;
const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();
const cors = require("cors");

app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
app.use(express.json());
app.use(cors()) //trocar depois pra o endereço correto

//GET ALL - Equipamentos
app.get('/equipamentos', async (req, res) => {
    try {
        const equipamentos = await prisma.equipamento.findMany();
        if (equipamentos.length > 0) {
            res.status(200).json(equipamentos);
        } else {
            res.status(404).json({ message: 'Nenhum equipamento encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

//GET BY ID - Equipamentos
app.get('/equipamentos/:id', async (req, res) => {
    try {
        const equipamento = await prisma.equipamento.findUnique({
            where: {
                id: req.params.id
            }
        });
        if (equipamento) {
            res.status(200).json(equipamento);
        } else {
            res.status(404).json({ message: 'Equipamento não encontrado' });
        }
    } catch (error) {
        if (error instanceof Prisma.PrismaClientValidationError) {
            res.status(400).json({ error: "O id enviado é inválido"});
        }
        res.status(500).json({ error: "Erro do servidor" });
    }
});

//POST - Equipamentos
app.post('/equipamentos', async (req, res) => {
    try {
        const equipamento = await prisma.equipamento.create({
            data: {
                nome: req.body.nome,
                linkImagem: req.body.linkImagem,
                descricao: req.body.descricao
            }
        });
        res.status(201).json(equipamento);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientValidationError) {
            res.status(400).json({ error: "Os dados enviados são inválidos"});
        } else {
            res.status(500).json({ error: "Erro do servidor"});
        }
    }
});

//PUT - Equipamentos
app.put('/equipamentos/:id', async (req, res) => {
    try {
        const equipamento = await prisma.equipamento.update({
            where: { id: req.params.id },
            data: req.body
        });
        res.status(200).json(equipamento);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientValidationError) {
            res.status(400).json({ error: "Os dados enviados são inválidos"});
        }
        res.status(500).json({ error: "Erro do servidor" });
    }
});

//DELETE - Equipamentos
app.delete('/equipamentos/:id', async (req, res) => {
    try {
        await prisma.equipamento.delete({
            where: { id: req.params.id }
        });
        res.status(204).send();
    } catch (error) {
        if (error instanceof Prisma.PrismaClientValidationError) {
            res.status(400).json({ error: "O id enviado é inválido"});
        }
        res.status(500).json({ error: "Erro do servidor"});
    }
});

//GET ALL - Servicos
app.get('/servicos', async (req, res) => {
    try {
        const servicos = await prisma.servico.findMany();
        if (servicos.length > 0) {
            res.status(200).json(servicos);
        } else {
            res.status(404).json({ message: 'Nenhum servico encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro do servidor" });
    }
});

//GET BY ID - Servicos
app.get('/servicos/:id', async (req, res) => {
    try {
        const beneficios = await prisma.beneficio.findMany({
            where: {
                servicoId: req.params.id
            }
        });
        let servico = await prisma.servico.findUnique({
            where: {
                id: req.params.id
            }
        });
        servico.beneficio = beneficios;
        if (servico) {
            res.status(200).json(servico);
        } else {
            res.status(404).json({ message: 'Servico não encontrado' });
        }
    } catch (error) {
        if (error instanceof Prisma.PrismaClientValidationError) {
            res.status(400).json({ error: "O id enviado é inválido"});
        }
        res.status(500).json({ error: "Erro do servidor" });
    }
});

//POST - Servicos
app.post('/servicos', async (req, res) => {
    try {
        const servico = await prisma.servico.create({
            data: {
                nome: req.body.nome,
                descricao: req.body.descricao,
                linkImagem: req.body.linkImagem
            }
        })
        req.body.beneficio.forEach(async beneficio => {
            await prisma.beneficio.create({
                data: {
                    texto: beneficio,
                    servicoId: servico.id
                }
            })
        });
        res.status(201).json(servico);
    } catch (error) {
        console.log(error);
        if (error instanceof Prisma.PrismaClientValidationError) {
            res.status(400).json({ error: "Os dados enviados são inválidos"});
        }
        res.status(500).json({ error: "Erro do servidor"});
    }
});

//PUT - Servicos
app.put('/servicos/:id', async (req, res) => {
    try {
        const servico = await prisma.servico.update({
            where: { id: req.params.id },
            data: req.body
        });
        res.status(200).json(servico);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientValidationError) {
            res.status(400).json({ error: "Os dados enviados são inválidos"});
        }
        res.status(500).json({ error: "Erro do servidor" });
    }
});

//DELETE - Servicos
app.delete('/servicos/:id', async (req, res) => {
    try {
        await prisma.beneficio.deleteMany({
            where: {
                servicoId: req.params.id
            }
        })
        await prisma.servico.delete({
            where: { id: req.params.id }
        });
        res.status(204).send();
    } catch (error) {
        if (error instanceof Prisma.PrismaClientValidationError) {
            res.status(400).json({ error: "O id enviado é inválido"});
        }
        res.status(500).json({ error: "Erro do servidor"});
    }
});

//GET ALL - CAPACITAÇÕES
app.get('/capacitacoes', async (req, res) => {
    try {
        const capacitacoes = await prisma.capacitacao.findMany();
        if (capacitacoes.length > 0) {
            res.status(200).json(capacitacoes);
        } else {
            res.status(404).json({ message: 'Nenhuma capacitação encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro do servidor" });
    }
});

//GET BY ID - CAPACITAÇÕES
app.get('/capacitacoes/:id', async (req, res) => {
    try {
        const aprendizados = await prisma.aprendizado.findMany({
            where: {
                capacitacaoId: req.params.id
            }
        })
        let capacitacao = await prisma.capacitacao.findUnique({
            where: {
                id: req.params.id
            }
        });
        capacitacao.aprendizado = aprendizados;
        if (capacitacao) {
            res.status(200).json(capacitacao);
        } else {
            res.status(404).json({ message: 'Capacitação não encontrada' });
        }
    } catch (error) {
        if (error instanceof Prisma.PrismaClientValidationError) {
            res.status(400).json({ error: "O id enviado é inválido"});
        }
        res.status(500).json({ error: "Erro do servidor" });
    }
});

//POST - CAPACITAÇÕES
app.post('/capacitacoes', async (req, res) => {
    try {
        const capacitacao = await prisma.capacitacao.create({
            data: {
                cargaHoraria: req.body.cargaHoraria,
                nome: req.body.nome,
                linkImagem: req.body.linkImagem,
                descricao: req.body.descricao
            }
        });
        req.body.aprendizado.forEach(async aprendizado => {
            await prisma.aprendizado.create({
                data: {
                    texto: aprendizado,
                    capacitacaoId: capacitacao.id
                }
            })
        });
        res.status(201).json(capacitacao);
    } catch (error) {
        console.log(error);
        if (error instanceof Prisma.PrismaClientValidationError) {
            res.status(400).json({ error: "Os dados enviados são inválidos"});
        }
        res.status(500).json({ error: "Erro do servidor"});
    }
});

//PUT - CAPACITAÇÕES
app.put('/capacitacoes/:id', async (req, res) => {
    try {
        const capacitacao = await prisma.capacitacao.update({
            where: { id: req.params.id },
            data: req.body
        });
        res.status(200).json(capacitacao);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientValidationError) {
            res.status(400).json({ error: "Os dados enviados são inválidos"});
        }
        res.status(500).json({ error: "Erro do servidor" });
    }
});

//DELETE - CAPACITAÇÕES
app.delete('/capacitacoes/:id', async (req, res) => {
    try {
        await prisma.aprendizado.deleteMany({
            where: {
                capacitacaoId: req.params.id
            }
        })
        await prisma.capacitacao.delete({
            where: { id: req.params.id }
        });
        res.status(204).send();
    } catch (error) {
        if (error instanceof Prisma.PrismaClientValidationError) {
            res.status(400).json({ error: "O id enviado é inválido"});
        }
        console.log(error);
        res.status(500).json({ error: "Erro do servidor"});
    }
});

//GET ALL - USERS
app.get('/users', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        if (users.length > 0) {
            res.status(200).json(users);
        } else {
            res.status(404).json({ message: 'Nenhum usuário encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro do servidor" });
    }
});

//GET BY ID - USERS
app.get('/users/:id', async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: req.params.id
            }
        });
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'Usário não encontrado' });
        }
    } catch (error) {
        if (error instanceof Prisma.PrismaClientValidationError) {
            res.status(400).json({ error: "O id enviado é inválido"});
        }
        res.status(500).json({ error: "Erro do servidor" });
    }
});

//POST USERS
app.post('/users', async (req, res) => {
    try {
        const user = await prisma.user.create({
            data: req.body
        });
        res.status(201).json(user);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientValidationError) {
            res.status(400).json({ error: "Os dados enviados são inválidos"});
        }
        if (erro instanceof Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({ error: "O usuário já está registrado no sistema!"});
        }
        res.status(500).json({ error: "Erro do servidor"});
    }
})

//PUT - USERS
app.put('/users/:id', async (req, res) => {
    try {
        const user = await prisma.user.update({
            where: { id: req.params.id },
            data: req.body
        });
        res.status(200).json(user);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientValidationError) {
            res.status(400).json({ error: "Os dados enviados são inválidos"});
        }
        res.status(500).json({ error: "Erro do servidor" });
    }
});

//DELETE - USERS
app.delete('/users/:id', async (req, res) => {
    try {
        await prisma.user.delete({
            where: { id: req.params.id }
        });        
        res.status(204).send();
    } catch (error) {
        if (error instanceof Prisma.PrismaClientValidationError) {
            res.status(400).json({ error: "O id enviado é inválido"});
        }
        res.status(500).json({ error: "Erro do servidor"});
    }
});

app.post('/admin/login', async (req, res) => {
    try {
        const user = await prisma.adminUsers.findUnique({
            where: {
                cpf: req.body.cpf
            }
        });
        if (user) {
            if (user.senha === req.body.senha) {
                res.status(200).json(user);
            } else {
                res.status(401).json({ message: 'Senha inválida' });
            }
        } else {
            res.status(404).json({ message: 'Usário não encontrado' });
        }
    } catch (error) {
        if (error instanceof Prisma.PrismaClientValidationError) {
            res.status(400).json({ error: "O id enviado é inválido"});
        } else {
            res.status(500).json({ error: "Erro do servidor" });
        }
    }
});

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: "resgatepraticoautomatico@gmail.com",
            pass: "julw vihl bylb ivwl" //colocar a senha de apps menos seguros do gmail
        }
    });

function transformInformacoesEmail(informacoesEmail) {
    return "Nome Solicitador: " + informacoesEmail.nome + "\n" + "Email Solicitador: " + informacoesEmail.email + "\n" + "- Cursos: " + informacoesEmail.curso + "\n" +
        "- Equipamentos: " + informacoesEmail.equipamento + "\n" +
        "- Servicos: " + informacoesEmail.servico
}

function enviarEmail(informacoesEmail) {
    const conteudo = transformInformacoesEmail(informacoesEmail);
    transporter.sendMail({
        from: "Resgate Prático Automático <resgatepraticoautomatico@gmail.com>", //esse padrão é indispensável e o email tem que ser igual ao do transporter
        to: "resgatepraticoautomatico@gmail.com",
        subject: "Solicitação de Contato de " + informacoesEmail.nome,
        text: conteudo,
    }).then(msg => {
        return msg	 //msg de sucesso
    }).catch(err => {
        return err //msg de erro
    })
}

app.post('/contato', async (req, res) => {
    try {
        const informacoesEmail = {
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone,
            curso: req.body.curso,
            servicos: req.body.servicos,
            equipamentos: req.body.equipamentos
        }
        const response = await enviarEmail(informacoesEmail);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: "Erro do servidor" });
    }
})