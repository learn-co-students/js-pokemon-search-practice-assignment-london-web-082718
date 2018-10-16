const pokeInput = document.querySelector('#pokemon-search-input')
const pokeList = document.querySelector('#pokemon-container')
let pokemonsNotFromServer

function appendPokemon (pokemon) {
  const pokeItem = renderPokemon(pokemon)
  pokeList.appendChild(pokeItem)
}

function appendPokemons (pokemons) {
  pokemons.forEach(pokemon => appendPokemon(pokemon))
}

function renderPokemon (pokemon) {
  const pokeItem = document.createElement('div')
  pokeItem.classList.add('pokemon-container')

  pokeItem.innerHTML = `
    <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div style="width:239px;margin:auto">
        <div style="width:96px;margin:auto">
          <img src="${pokemon.sprites.back}">
        </div>
      </div>
    </div>
  `
  const imgEl = pokeItem.querySelector('img')
  pokeItem.addEventListener('click', event => {
    // if (imgEl.src === pokemon.sprites.back) {
    //   imgEl.src = pokemon.sprites.front
    // } else {
    //   imgEl.src = pokemon.sprites.back
    // }
    imgEl.src = imgEl.src === pokemon.sprites.back ?
      pokemon.sprites.front :
      pokemon.sprites.back
  })

  return pokeItem
}

function updateList () {
  pokeList.innerHTML = ''
  const filter = pokeInput.value
  const filteredPokemons = pokemonsNotFromServer.filter(pokemon => pokemon.name.includes(filter))
  appendPokemons(filteredPokemons)
}

pokeInput.addEventListener('keyup', updateList)

pokeList.innerText = ''
API.getPokemons()
  .then(pokemonsFromServer => {
    pokemonsNotFromServer = pokemonsFromServer
    appendPokemons(pokemonsFromServer)
  })