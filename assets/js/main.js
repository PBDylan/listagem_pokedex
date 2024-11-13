

function convertPokemonToHTML(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                <img src="https://w7.pngwing.com/pngs/984/841/png-transparent-bulbasaur-bulbasaur-pokemon-animation-thumbnail.png">
            </div>
        </li>
    `;
}

const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');
});

