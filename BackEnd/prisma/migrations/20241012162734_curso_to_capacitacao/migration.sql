/*
  Warnings:

  - You are about to drop the `Curso` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Curso";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Capacitacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "cargaHoraria" INTEGER NOT NULL,
    "linkImagem" TEXT NOT NULL
);
