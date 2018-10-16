class Pokemon {
  
  constructor(pokeObj) {
    Object.assign(this, pokeObj)
    this.render()
  }

  render() {
    let pokeEl = document.createElement('div');
    pokeEl.className = 'pokemon-container';
    pokeEl.id = this.id;
    pokeEl.innerHTML = `
    <div class='card-header'>
      <h1>${this.name}</h1>&nbsp<button>x</button>   
    </div>
    <img src=${this.sprites.front} id="img-${this.id}"/>
    `;
    this.element = pokeEl;
    this.listenForFlip()
    this.listenForDelete()
    return this.element;
  }

  listenForFlip() {
    this.img = this.element.querySelector(`img`)
    this.flipped = false
    this.img.addEventListener('click', this.flip.bind(this))
  }

  flip() {
    this.img.src = this.flipped ? this.sprites.front : this.sprites.back
    this.flipped = !this.flipped
  }

  listenForDelete() {
    this.element.querySelector('button')
      .addEventListener('click', () => pokeList.deletePokemon(this))
  }

  remove() {
    this.element.remove()
  }

}