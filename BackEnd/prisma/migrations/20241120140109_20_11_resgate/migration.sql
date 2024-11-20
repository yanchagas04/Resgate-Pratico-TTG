/*
  Warnings:

  - You are about to drop the column `cpf` on the `AdminUsers` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_AdminUsers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);
INSERT INTO "new_AdminUsers" ("id", "nome", "senha") SELECT "id", "nome", "senha" FROM "AdminUsers";
DROP TABLE "AdminUsers";
ALTER TABLE "new_AdminUsers" RENAME TO "AdminUsers";
CREATE UNIQUE INDEX "AdminUsers_nome_key" ON "AdminUsers"("nome");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
