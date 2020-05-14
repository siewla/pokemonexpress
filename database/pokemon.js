const { Pokemon } = require('../models');
const { PokemonNotFoundError } = require('../errors');

const POKEMON = [
    { name: 'bulbasaur', img: 'https://vignette.wikia.nocookie.net/pokemon/images/2/21/001Bulbasaur.png/revision/latest?cb=20140328190757' },
    { name: 'ivysaur', img: 'https://vignette.wikia.nocookie.net/pokemon/images/7/73/002Ivysaur.png/revision/latest?cb=20140328190847' },
    { name: 'venusaur', img: 'https://vignette.wikia.nocookie.net/pokemon/images/a/ae/003Venusaur.png/revision/latest?cb=20140328190902' },
    { name: 'charmander', img: 'https://vignette.wikia.nocookie.net/pokemon/images/7/73/004Charmander.png/revision/latest?cb=20140724195345' },
    { name: 'charizard', img: 'https://vignette.wikia.nocookie.net/pokemon/images/7/7e/006Charizard.png/revision/latest?cb=20140328191325' },
    { name: 'squirtle', img: 'https://vignette.wikia.nocookie.net/pokemon/images/3/39/007Squirtle.png/revision/latest?cb=20140328191525' },
    { name: 'wartortle', img: 'https://vignette.wikia.nocookie.net/pokemon/images/0/0c/008Wartortle.png/revision/latest?cb=20140328191553' }
];

const buildPokemon = ({ name, img }) => {
    return new Pokemon(name, img);
};

module.exports = {
    getAll () {
        return POKEMON.map(buildPokemon);
    },
    getByIndex (index) {
        if (!POKEMON[index]) throw new PokemonNotFoundError(index);
        return buildPokemon(POKEMON[index]);
    }
};