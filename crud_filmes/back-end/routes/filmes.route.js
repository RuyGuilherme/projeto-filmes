const express = require('express');

const router = express.Router();

const filmesController = require('../controllers/filmes.controller');

router.get('/', filmesController.getfilmes)

router.get('/:id', filmesController.getfilmesById)

router.post('/add', filmesController.postfilmes)

router.put('/edit/:id', filmesController.putFilmes)

router.delete('/delete/:id', filmesController.deletefilmes)

module.exports = router;

