/*
  Warnings:

  - You are about to drop the column `aprendizadoId` on the `Capacitacao` table. All the data in the column will be lost.
  - You are about to drop the column `beneficioId` on the `Servico` table. All the data in the column will be lost.
  - Added the required column `capacitacaoId` to the `Aprendizado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `servicoId` to the `Beneficio` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Aprendizado" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "texto" TEXT NOT NULL,
    "capacitacaoId" TEXT NOT NULL,
    CONSTRAINT "Aprendizado_capacitacaoId_fkey" FOREIGN KEY ("capacitacaoId") REFERENCES "Capacitacao" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Aprendizado" ("id", "texto") SELECT "id", "texto" FROM "Aprendizado";
DROP TABLE "Aprendizado";
ALTER TABLE "new_Aprendizado" RENAME TO "Aprendizado";
CREATE TABLE "new_Beneficio" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "texto" TEXT NOT NULL,
    "servicoId" TEXT NOT NULL,
    CONSTRAINT "Beneficio_servicoId_fkey" FOREIGN KEY ("servicoId") REFERENCES "Servico" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Beneficio" ("id", "texto") SELECT "id", "texto" FROM "Beneficio";
DROP TABLE "Beneficio";
ALTER TABLE "new_Beneficio" RENAME TO "Beneficio";
CREATE TABLE "new_Capacitacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "cargaHoraria" INTEGER NOT NULL,
    "linkImagem" TEXT NOT NULL
);
INSERT INTO "new_Capacitacao" ("cargaHoraria", "descricao", "id", "linkImagem", "nome") SELECT "cargaHoraria", "descricao", "id", "linkImagem", "nome" FROM "Capacitacao";
DROP TABLE "Capacitacao";
ALTER TABLE "new_Capacitacao" RENAME TO "Capacitacao";
CREATE TABLE "new_Servico" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "linkImagem" TEXT NOT NULL
);
INSERT INTO "new_Servico" ("descricao", "id", "linkImagem", "nome") SELECT "descricao", "id", "linkImagem", "nome" FROM "Servico";
DROP TABLE "Servico";
ALTER TABLE "new_Servico" RENAME TO "Servico";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
