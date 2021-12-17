const express = require('express');

const router = express.Router();

const filmesController = require('../controllers/filmes.controller');

router.get('/', filmesController. getFilmesController)

router.get('/:id', filmesController.getFilmesByIdController)

router.post('/add', filmesController.createFilmeController)

router.put('/edit/:id', filmesController.updateFilmeController)

router.delete('/delete/:id', filmesController.deleteFilmeController)

module.exports = router;

