
const SUPERHERO_TOKEN = '10223569763528853'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

const SuperHeroButton = document.getElementById('SuperHeroButton')

const heroImageDiv = document.getElementById('heroImage')

const searchButton = document.getElementById('searchButton')

const searchInput = document.getElementById('searchInput')

const getSuperHero = (id, name) => {
  fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
      console.log(json.powerstats)
      const superHero = json
      showHeroInfo(superHero)
      
    })
}
const statToEmoji = {
  intelligence: '🧠',
  strength: '💪',
  speed: '⚡',
  durability: '🏋️‍♂️',
  power: '📊',
  combat: '⚔️',
}

const showHeroInfo = (character) => {
  const name = `<h2>${character.name}</h2>`

  const img = `<img src = "${character.image.url}" height = 250, width = 250/>`
    
  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p> ${statToEmoji[stat]} ${stat.toUpperCase()} : ${character.powerstats[stat]} </p>`
  }).join('')
  
  //console.log(stats.join(''))
  heroImageDiv.innerHTML = `${name} ${img} ${stats} `
  
 
}

const getSearchSuperHero = (name) => {
  fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
      const shero = json.results[0]
      showHeroInfo(shero)
      
    })
}

const randomHero = () => {
  const numberOfHeroes = 731
  return Math.floor(Math.random() * numberOfHeroes) + 1
}

SuperHeroButton.onclick = () => getSuperHero(randomHero())

searchButton.onclick = () => getSearchSuperHero(searchInput.value)
//const img = "https://www.superherodb.com/pictures2/portraits/10/100/85.jpg"




//document.querySelector('body').innerHTML += 'goodbye'