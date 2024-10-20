-- CreateTable
CREATE TABLE "AdminUsers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "AdminUsers_cpf_key" ON "AdminUsers"("cpf");
