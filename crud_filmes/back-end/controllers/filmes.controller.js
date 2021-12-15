const filmesService = require('../services/filmes.service');

const getfilmes = (req, res) => {
    const filmes = filmesService.getFilmesService();
    res.send(filmes);
}

const getfilmesById = (req, res) => {
   
    const id = req.params.id;
    const filmes = filmesService.getFilmesByIdService(id);
    res.send(filmes)
}

const postfilmes = (req, res) => {
    
    const filme = req.body;
    console.log(req.body);
   
    const newfilme = filmesService.addFilmes(filme);
    res.send({message: `Filme ${ newfilme.Filme } cadastrado com sucesso`})
}

const putFilmes = (req, res) => {
    
    const idParam = req.params.id
    
    const filmeEdit = req.body
    const edicao = filmesService.putFilmes(idParam, filmeEdit);
    if(edicao) {
        res.send({message: `A filme foi editado com sucesso!`})
    } else {
        res.status(404).send({message: `Nao encontramos o filme com esse id para editar`})
    }
}

const deletefilmes = (req, res) => {

    const filmeExcluido = filmesService.deleteFilmes(req.params.id);
    res.send(`O filme ${filmeExcluido.Filme} foi excluido com sucesso`);
    
}

module.exports = {
    getfilmes,
    getfilmesById,
    postfilmes,
    putFilmes,
    deletefilmes
}