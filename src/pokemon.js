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
    <h1>${this.name}</h1>
    <img src=${this.sprites.front} id="img-${this.id}"/>
    `;
    this.element = pokeEl;
    this.listenForFlip()
    return this.element;
  }

  listenForFlip() {
    this.img = this.element.querySelector(`#img-${this.id}`)
    this.flipped = false
    this.img.addEventListener('click', this.flip.bind(this))
  }

  flip() {
    this.img.src = this.flipped ? this.sprites.front : this.sprites.back
    this.flipped = !this.flipped
  }

}