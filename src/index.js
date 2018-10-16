document.addEventListener('DOMContentLoaded', () => {
  
  const searchBox = document.querySelector('#pokemon-search-input')

  function fetchAllPokemon() {
    fetch(pokeURL)
      .then(resp => resp.json())
      .then(resp => pokeList.addPokemons(resp))
      .then(pokeList.displayPokemons)
  }

  function filterPokemons() {
    pokeList.filterPokemons(searchBox.value)
  }

  searchBox.addEventListener('keyup', filterPokemons)

  fetchAllPokemon()

})

const pokeURL = 'http://localhost:3000/pokemon'
