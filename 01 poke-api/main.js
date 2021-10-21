const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '400'
}

const { url, type, id } = apiData
const apiUrl = `${url}${type}/${id}`

fetch(apiUrl)
    .then((data) => data.json())
    .then((pokemon) => generateHtml(pokemon))

const generateHtml = (data) => {
    console.log(data)
    const html = `
            <div class="name">${data.name}</div>
            <img src="${data.sprites.front_default}">
            <div class="details">
                <span>Height: ${data.height}</span>
                <span>Weight: ${data.weight}</span>
            </div>
        `
    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html
}