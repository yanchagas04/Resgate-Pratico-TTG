/*
  Warnings:

  - Added the required column `linkImagem` to the `Curso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linkImagem` to the `Equipamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `linkImagem` to the `Servico` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Curso" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "cargaHoraria" INTEGER NOT NULL,
    "linkImagem" TEXT NOT NULL
);
INSERT INTO "new_Curso" ("cargaHoraria", "descricao", "id", "nome") SELECT "cargaHoraria", "descricao", "id", "nome" FROM "Curso";
DROP TABLE "Curso";
ALTER TABLE "new_Curso" RENAME TO "Curso";
CREATE TABLE "new_Equipamento" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "linkImagem" TEXT NOT NULL
);
INSERT INTO "new_Equipamento" ("descricao", "id", "nome") SELECT "descricao", "id", "nome" FROM "Equipamento";
DROP TABLE "Equipamento";
ALTER TABLE "new_Equipamento" RENAME TO "Equipamento";
CREATE TABLE "new_Servico" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "linkImagem" TEXT NOT NULL
);
INSERT INTO "new_Servico" ("descricao", "id", "nome") SELECT "descricao", "id", "nome" FROM "Servico";
DROP TABLE "Servico";
ALTER TABLE "new_Servico" RENAME TO "Servico";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
