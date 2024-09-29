const express = require('express');
const app = express();
const PORT = 3000;
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/equipamentos', async (req, res) => {
    try {
        const equipamentos = await prisma.equipamento.findMany();
        res.json(equipamentos);
        if (equipamentos.length === 0) {
            res.status(404).json({ error: "Nenhum equipamento encontrado" });
        } else {
            res.status(200).json(equipamentos);
        }	
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar equipamentos" });
    }
})