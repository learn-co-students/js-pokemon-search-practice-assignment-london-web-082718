document.addEventListener('DOMContentLoaded', () => {

  const pokeCont = document.getElementById('pokemon-container');
  const pokeForm = document.querySelector('#pokemon-search-form');
  const pokeInput = document.querySelector('#pokemon-search-input');


  const getPokemons = () =>
   fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
  
  let counter = 0;

  const renderPokemon = function(pokemonItem){
    const pokemonItemDiv = document.createElement('div');
    pokemonItemDiv.innerHTML = `
    <div class="pokemon-container"> 
      <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
        <h1 class="center-text">${pokemonItem.name}</h1>
      <div style="width:239px;margin:auto">
        <div style="width:96px;margin:auto">
          <img id="pokemon-image-${counter++}" src="${pokemonItem.sprites.front}">
        </div>
      </div>
      </div>
    </div>
    `
    pokeCont.append(pokemonItemDiv);
  };
  


  function removeAll() {
    while (pokeCont.firstChild){
      pokeCont.removeChild(pokeCont.firstChild);
    }
  }

  const renderPokemons = pokemons =>
  pokemons.forEach(renderPokemon)

getPokemons().then(renderPokemons)

const filterPokemons = (pokemons, event) => {
  const filteredPokemon = pokemons.filter(pokemon => 
    pokemon.name.includes(event.target.value.toLowerCase()));
    removeAll();
    filteredPokemon.forEach(function(pokemonItem){
    renderPokemon(pokemonItem)
  })};

  pokeForm.addEventListener('input', event => {
    getPokemons().then(resp => {
     filterPokemons(resp, event)
    });
  });

  pokeCont.addEventListener('click', event => {
    if (event.toElement.tagName === "IMG"){ 
      console.log(event.path[0]);
    }
    
  });

});

