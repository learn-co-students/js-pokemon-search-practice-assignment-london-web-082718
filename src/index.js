document.addEventListener('DOMContentLoaded', () => {
  //YOUR CODE HERE
  const pokeNameInput = document.querySelector('#pokemon-search-input')
  const pokeContEl = document.querySelector('#pokemon-container')

 document.getElementById('pokemon-container')

forPokemon(POKEMON)

  pokeNameInput.addEventListener('input', event =>{
    let pokeValue = pokeNameInput.value

    // deletestuff
    pokeContEl.innerHTML = ''

    forPokemon(POKEMON.filter(pokemony => pokemony.name.includes(pokeValue)))
  })

function forPokemon(pokeList){
   pokeList.forEach(pokemon => {
   //create div 
   const pokeDiv = document.createElement('div');
   pokeDiv.style.width = "180px";
   pokeDiv.style.height = "180px";
   pokeDiv.style.background = "#fecd2f";
   pokeDiv.style.color = "#2d72fc"
   pokeDiv.style.margin = "10px";
   pokeDiv.className = 'pokemon-container'

   //change innerHTML of div to name, picture
   pokeDiv.innerHTML = `<center>
    PokeName: ${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
    <img src = "${pokemon.sprites.back}">
    </center>
   `

   //append pokemon div 
   pokeContEl.appendChild(pokeDiv)

   pokeDiv.addEventListener('click', event =>{
    if (event.target.src === pokemon.sprites.back) {
      event.target.src = pokemon.sprites.front
    } else {event.target.src = pokemon.sprites.back}
  })
 })
}
})