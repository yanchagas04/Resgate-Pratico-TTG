/*
  Warnings:

  - You are about to drop the column `linkDowload` on the `Ebook` table. All the data in the column will be lost.
  - Added the required column `linkDownload` to the `Ebook` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ebook" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "linkDownload" TEXT NOT NULL
);
INSERT INTO "new_Ebook" ("descricao", "id", "nome") SELECT "descricao", "id", "nome" FROM "Ebook";
DROP TABLE "Ebook";
ALTER TABLE "new_Ebook" RENAME TO "Ebook";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
