const express = require('express');
const app = express();
const PORT = 3000;
const {PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient();

app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});

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
        res.status(500).json({ error: error.message });
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
        res.status(500).json({ error: error.message });
    }
});

//POST - Equipamentos
app.post('/equipamentos', async (req, res) => {
    try {
        const equipamento = await prisma.equipamento.create({
            data: req.body
        });
        res.status(201).json(equipamento);
    } catch (error) {
        if (error instanceof Prisma.PrismaClientValidationError) {
            res.status(400).json({ error: "Os dados enviados são inválidos"});
        }
        res.status(500).json({ error: error.message, code: error.code });
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
        res.status(500).json({ error: error.message });
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
        res.status(500).json({ error: error.message });
    }
});





