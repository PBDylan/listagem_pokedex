// O fetch é um processamento assíncrono, onde acontece todo
// aquele processamento de Cliente x Servidor. 
// Promisse<Response> dentro de fetch(url) seria uma promessa de resposta ("Uma hora você vai receber sua resposta")


const offset = 0
const limit = 10
const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}'

fetch(url)
    .then{(response) => response.json()}
    .then{(jsonBody) => console.log(jsonBody)}
    .catch{(error) => console.log(error)}




