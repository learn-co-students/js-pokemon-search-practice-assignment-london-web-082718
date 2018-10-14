
const getPokemons = () =>
  // fetch makes a GET request by default
  // so no options needed here
  fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())




  