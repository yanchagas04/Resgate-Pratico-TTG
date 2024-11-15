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
    console.log(informacoesEmail);
    return "Nome Solicitador: " + informacoesEmail.nome + "\n" + "Email Solicitador: " + informacoesEmail.email + "\n" + "- Cursos: " + informacoesEmail.cursos + "\n" +
        "- Equipamentos: " + informacoesEmail.equipamentos + "\n" +
        "- Servicos: " + informacoesEmail.servicos
}

function enviarEmail(informacoesEmail) {
    const conteudo = transformInformacoesEmail(informacoesEmail);
    console.log(conteudo);
    transporter.sendMail({
        from: "Resgate Prático Automático <resgatepraticoautomatico@gmail.com>", //esse padrão é indispensável e o email tem que ser igual ao do transporter
        to: "resgatepraticoautomatico@gmail.com",
        subject: "Solicitação de Contato de " + informacoesEmail.nome,
        text: conteudo,
    }).then(msg => {
        return { message: msg }	 //msg de sucesso
    }).catch(err => {
        return { error: err } //msg de erro
    })
}

