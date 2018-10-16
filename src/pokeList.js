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

    static removePokemons() {
      while (pokeContainer.firstChild) {
        pokeContainer.removeChild(pokeContainer.firstChild)
      }
    }

    static filterPokemons(text) {
      let selection = all.filter(pokemon => pokemon.name.includes(text))
      this.removePokemons()
      this.displayPokemons(selection)
    }
  }

}
)()

const pokeContainer = document.querySelector('#pokemon-container');
