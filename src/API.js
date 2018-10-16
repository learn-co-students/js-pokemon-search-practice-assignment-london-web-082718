class API {
  static init () {
    this.baseUrl = 'http://localhost:3000/pokemon'
  }

  static getPokemons () {
    return fetch(this.baseUrl)
      .then(resp => resp.json())
  }

  static getPokemon (id) {
    return fetch(`${this.baseUrl}/${id}`)
      .then(resp => resp.json())
  }

  static createPokemon (name, frontImage, backImage) {
    // 'POST'
    return fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        'name': name,
        'sprites': {
          'front': frontImage,
          'back': backImage
        }
      })
    }).then(resp => resp.json())
  }

  static deletePokemon (id) {
    return fetch(`${this.baseUrl}/${id}`, {
      method: 'DELETE'
    })
  }

  static editPokemonName (id, newName) {
    return fetch(`${this.baseUrl}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'name': newName })
    }).then(resp => resp.json())
  }

  static editPokemon (pokemon) {
    return fetch(`${this.baseUrl}/${pokemon.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pokemon)
    }).then(resp => resp.json())
  }
}

API.init()
