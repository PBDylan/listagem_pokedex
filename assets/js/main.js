const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

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

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((results) => {
        for (let i = 0; i < results.length; i++) {
            const pokemon = results[i];
            pokemonList.innerHTML += convertPokemonToLi(pokemon);
        }
    })
    .catch((error) => console.log(error));
