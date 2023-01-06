
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
      getStatsHTML(json)
      const name = `<h2>${json.name}</h2>`

      heroImageDiv.innerHTML = `${name}<img src = "${json.image.url}" height = 250, width = 250/> `
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

const getStatsHTML = (character) => {
  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p> ${statToEmoji[stat]} ${stat} : ${character.powerstats[stat]} </p>`
  })
  console.log(stats)
}

const getSearchSuperHero = (name) => {
  fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
      const shero = json.results[0]
      console.log(shero)
      heroImageDiv.innerHTML = `<img src = "${shero.image.url}" height = 250, width = 250/>`
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