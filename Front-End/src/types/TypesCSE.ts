export type Aprendizado = {
    id: string,
    texto: string
}

export type Beneficio = {
    id: string,
    texto: string
}

export type Curso = {
    nome: string,
    descricao: string,
    linkImagem: string,
    id: string,
    tipo: string,
    aprendizado: Aprendizado[],
    cargaHoraria: number
}

export type Servico = {
    nome: string,
    descricao: string,
    linkImagem: string,
    id: string,
    tipo: string,
    beneficio: Beneficio[]
}

export type Equipamento = {
    nome: string,
    descricao: string,
    linkImagem: string,
    id: string,
    tipo: string,
}

export type Ebook = {
    id: string,
    nome: string,
    descricao: string,
    linkDownload: string
}