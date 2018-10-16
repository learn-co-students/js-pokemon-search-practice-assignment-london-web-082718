const pokeList = (() => {

  const all = [];

  return class {
    
    static addPokemon(pokeObj) {
      all.push(new Pokemon(pokeObj));
    }

    static addPokemons(data) {
      data.forEach(pokeObj => this.addPokemon(pokeObj));
    }

    static displayPokemons(selection=all) {
      selection.forEach(pokemon => 
        pokeContainer.appendChild(pokemon.render())
      );
    }

    static removePokemonsFromDisplay() {
      while (pokeContainer.firstChild) {
        pokeContainer.removeChild(pokeContainer.firstChild)
      }
    }

    static filterPokemons(text) {
      let selection = all.filter(pokemon => pokemon.name.includes(text))
      this.removePokemonsFromDisplay()
      this.displayPokemons(selection)
    }

    static deletePokemon(pokemon) {
      fetch(pokeURL + `/${pokemon.id}`, {method: 'DELETE'})
        .then(all.splice(all.indexOf(pokemon), 1))
        .then(pokemon.remove())
    }
  }

}
)()

const pokeContainer = document.querySelector('#pokemon-container');
