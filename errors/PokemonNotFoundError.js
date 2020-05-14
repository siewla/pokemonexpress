const NotFoundError = require('./NotFoundError');

module.exports = class PokemonNotFoundError extends NotFoundError {
    constructor (index) {
        super(`The pokemon with index ${index} does not exist!`);
    }
};