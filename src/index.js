const pokeBox = document.querySelector('#pokemon-container')
const pokeSearchForm = document.querySelector('#pokemon-search-form')
const pokeInput = document.querySelector('#pokemon-search-input')
let pokeContainers;

// Add a single pokemon to the page
const renderPokemon = pokemon => {
  const pokeItem = document.createElement('div')
  pokeItem.innerHTML = `
  <div class="pokemon-container">
    <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div style="width:239px;margin:auto">
        <div style="width:96px;margin:auto" class="test">
          <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite-front hide" src="${pokemon['sprites']['front']}">
          <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite-back hide" src="${pokemon['sprites']['back']}">
        </div>
      </div>
    </div>
  </div>
  `
  pokeContainers = document.querySelectorAll('.pokemon-container')
  // let test = document.querySelectorAll('.pokemon-container')
  pokeBox.append(pokeItem)
  // document.querySelector('.toggle-sprite-back').style.display = 'none'
  // back.style.display = 'none'
}

// Add all pokemons to the pagep

// Getting POKEMONS from local file: p
const renderPokemons = pokemons => 
  pokemons.forEach(renderPokemon)

// renderPokemons(POKEMON) // Call the method to actually rende them

// Getting pokemons from server using FETCH:
getPokemons()
  .then(renderPokemons)


// Add search feature 


const searchBar = document.forms['pokemon-search-form'].querySelector('input')

searchBar.addEventListener('keyup', function(e) {

  const term = e.target.value.toLowerCase() 
  console.log(term)
  
  Array.from(pokeContainers).forEach(function(container) {
    const name = container.querySelector('h1').textContent
    console.log(name)
    if(name.toLowerCase().indexOf(term) != -1 ) {
      container.style.display = 'block'
    } else {
      container.style.display = 'none'
    }
  })
})

// let test = document.querySelectorAll('.pokemon-container')

function classToggle() {
  this.classList.toggle('.toggle-sprite-front')
  this.classList.toggle('.toggle-sprite-back')
}

function flip() {
  pokeContainers.forEach(function(container) {
    container.addEventListener("click", function() {
      // front = container.classList('.toggle-sprite-front')
      // back = container.classList('.toggle-sprite-back')
      // front.style.display = 'none'
      // back.style.display = 'block'
      // container.querySelector('.toggle-sprite-front').style.display = 'none'
      // container.querySelector('.toggle-sprite-back').style.display = 'block'
      front = container.querySelector('.toggle-sprite-front')
      back = container.querySelector('.toggle-sprite-back') 
    })
    
  //   function() {
  //     // container.querySelector('.toggle-sprite-front').style.display = 'none'
  //     // container.querySelector('.toggle-sprite-back').style.display = 'block'

      
  //     // remove front image 
  //     // add back image 
  //     // transition the change 
  //     // when mouse leaves, revert image 
  //   })
  // }
  }
  )
}


// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }



// Add flip feature on the cards

// function test() {

//   if (pokeContainers) {
//     pokeContainers.forEach(function(container) {
//       console.log(container)
//       container.addEventListener("click", function(e) {
//         console.log("working")
//       })
    
//     })
//   }

// }
// pokeArray = Array.from(pokeContainers)

// for (var x=0; x < pokeArray.length; x++) {
//   pokeArray[x].addEventListener("mouseover", function() {
//       console.log("test");
//   });
// }

// test();











  // document.addEventListener('DOMContentLoaded', () => {
  //   console.log("Hello")
  //   //YOUR CODE HERE
  //   const pokeBox = document.querySelector('#pokemon-container')
  //   const pokeSearchForm = document.querySelector('#pokemon-search-form')
  //   const pokeInput = document.querySelector('#pokemon-search-input')
  //   const pokeContainers = document.querySelectorAll('.pokemon-container') 

  // })