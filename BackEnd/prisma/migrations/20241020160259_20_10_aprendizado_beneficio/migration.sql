/*
  Warnings:

  - Added the required column `aprendizadoId` to the `Capacitacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `beneficioId` to the `Servico` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Aprendizado" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "texto" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Beneficio" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "texto" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Capacitacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "aprendizadoId" TEXT NOT NULL,
    "cargaHoraria" INTEGER NOT NULL,
    "linkImagem" TEXT NOT NULL,
    CONSTRAINT "Capacitacao_aprendizadoId_fkey" FOREIGN KEY ("aprendizadoId") REFERENCES "Aprendizado" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Capacitacao" ("cargaHoraria", "descricao", "id", "linkImagem", "nome") SELECT "cargaHoraria", "descricao", "id", "linkImagem", "nome" FROM "Capacitacao";
DROP TABLE "Capacitacao";
ALTER TABLE "new_Capacitacao" RENAME TO "Capacitacao";
CREATE TABLE "new_Servico" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "beneficioId" TEXT NOT NULL,
    "linkImagem" TEXT NOT NULL,
    CONSTRAINT "Servico_beneficioId_fkey" FOREIGN KEY ("beneficioId") REFERENCES "Beneficio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Servico" ("descricao", "id", "linkImagem", "nome") SELECT "descricao", "id", "linkImagem", "nome" FROM "Servico";
DROP TABLE "Servico";
ALTER TABLE "new_Servico" RENAME TO "Servico";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
