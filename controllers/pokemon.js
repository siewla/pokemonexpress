const db = require('../database');

module.exports = {
    getAll (req, res) {
        res.render('pokemon/index', { pokemon: db.pokemon.getAll() });
    },
    getByIndex (req, res) {
        res.render('pokemon/show', { pokemon: db.pokemon.getByIndex(req.params.index) });
    }
};