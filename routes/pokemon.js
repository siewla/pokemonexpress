const { pokemonController } = require('../controllers');

module.exports = app => {
    app.get('/', pokemonController.getAll);
    app.get('/pokemon/:index', pokemonController.getByIndex);
};