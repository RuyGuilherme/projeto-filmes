const catalogoFilmes = [
    {
        id: 1,
        Filme: "Capitão América",
        ano: 2011,
        descrição: "O primeiro Vingador",
        imagem: "https://s.aficionados.com.br/imagens/capamerica.jpg"
    },
    {
        id: 2,
        Filme: "Capitã Marvel ",
        ano: 2019,
        descrição: "O filme contará a origem dessa heroína e da SHIELD",
        imagem: "https://s.aficionados.com.br/imagens/marvel-4.jpg"
    },
    {
        id: 3,
        Filme: "O Incrível Hulk ",
        ano: 2008,
        descrição: "foi nesse filme que Marvel começou a mostrar que o universo de seus heróis estava conectado",
        imagem: "https://s.aficionados.com.br/imagens/incrediblehulk.jpg"
    },
    {
        id: 4,
        Filme: "Homem de Ferro",
        ano: 2008,
        descrição: "O filme que deu início a todo Universo Cinematográfico da Marvel",
        imagem: "https://s.aficionados.com.br/imagens/ironman-4.jpg"
    },   
    {
        id: 5,
        Filme: "Homem de Ferro 2 ",
        ano: 2010,
        descrição: "Na sequência do filme do Homem de Ferro, o Universo Cinematográfico da Marvel não apenas apresenta uma nova aventura do Stark",
        imagem: "https://s.aficionados.com.br/imagens/ironman2-1.jpg"
    },
    {
        id: 6,
        Filme: "Thor ",
        ano: 2011,
        descrição: "Nesse filme a Marvel começou a explorar os conceitos de super-heróis cósmicos, mostrando outros planetas e raças que compõem o seu universo",
        imagem: "https://s.aficionados.com.br/imagens/thor1-0.jpg"
    },{
        id: 7,
        Filme: "Os Vingadores",
        ano: 2012,
        descrição: "Filme que encerrou a primeira fase de filmes do Universo Cinematográfico da Marvel, culminando na união dos super-heróis apresentados nos filmes anteriores",
        imagem: "https://s.aficionados.com.br/imagens/vingadores-20.jpg"
    },{
        id: 8,
        Filme: "Homem de Ferro 3 ",
        ano: 2013,
        descrição: "Assim que como Homem de Ferro dei início à Primeira Fase do UCM, o terceiro filme desse herói foi o escolhido para dar início à Segunda Fase",
        imagem: "https://s.aficionados.com.br/imagens/ironman3-0.jpg"
    },{
        id: 9,
        Filme: "Thor: O Mundo Sombrio",
        ano: 2013,
        descrição: "filme da Primeira Fase. O ponto mais chamativo desse filme é que foi a primeira aparição da Joia da Realidade",
        imagem: "https://s.aficionados.com.br/imagens/thor2.jpg"
    },{
        id: 10,
        Filme: "Capitão América: O Soldado Invernal ",
        ano: 2014,
        descrição: "Descobrimos neste filme que a Hydra está fazendo experimentos com a Joia da Mente para conferir superpoderes a seres humanos, e temos a apresentação de Wanda e Pietro Maximoff",
        imagem: "https://s.aficionados.com.br/imagens/capamerica2.jpg"
    },{
        id: 11,
        Filme: "Guardiões da Galáxia",
        ano: 2014,
        descrição: "Descobrimos mais sobre a vida pelo universo e sobre o vilão Thanos. Também é neste filme que a Joia do Poder aparece pela primeira vez.",
        imagem: "https://s.aficionados.com.br/imagens/guardians.jpg"
    },{
        id: 12,
        Filme: "Guardiões da Galáxia Vol. 2",
        ano: 2017,
        descrição: "Apesar da sequência de Guardiões da Galáxia ter estreado apenas três anos mais tarde, a história do Vol. 2 se passa apenas alguns meses após os eventos do primeiro filme",
        imagem: "https://s.aficionados.com.br/imagens/guardians2-0.jpg"
    },{
        id: 13,
        Filme: "Vingadores: Era de Ultron",
        ano: 2015,
        descrição: "Filme que realmente revela que a pedra que adornava o cetro utilizado por Loki no primeiro filme dos Vingadores era uma Joia do Infinito.",
        imagem: "https://s.aficionados.com.br/imagens/vingadores2.jpg"
    }
]

const getFilmesService = () => {
    return catalogoFilmes
}

const getFilmesByIdService = (idParam) => {
    return catalogoFilmes.find((filme) => filme.id == idParam)
}

const addFilmes = (newfilme) => {
    const newId = catalogoFilmes.length + 1;
    newfilme.id = newId;
 
    catalogoFilmes.push(newfilme);
    return newfilme;
}


const putFilmes = (idParam, filmeEdit) => {

    const index = catalogoFilmes.findIndex((filme) => filme.id == idParam);

    if(index >= 0) {
        catalogoFilmes[index] = {
            ...catalogoFilmes[index],
            ...filmeEdit
        }
        return true
    } else {
        return false
    }
}

const deleteFilmes = (idParam) => {
    const index = catalogoFilmes.findIndex((filme) => filme.id == idParam)
 
    const filmeExcluida = catalogoFilmes[index];
    catalogoFilmes.splice(index, 1)
    return filmeExcluida;
}

module.exports = {
    getFilmesService,
    getFilmesByIdService,
    addFilmes,
    putFilmes,
    deleteFilmes
}
