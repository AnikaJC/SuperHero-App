
const SUPERHERO_TOKEN = '10223569763528853'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

const SuperHeroButton = document.getElementById('SuperHeroButton')

const heroImageDiv = document.getElementById('heroImage')

const getSuperHero =(id, name) => {
  fetch(`${BASE_URL}/${id}`)
  .then(response => response.json())
  .then(json => {
    console.log(json)
    heroImageDiv.innerHTML += `<img src = "${json.image.url}" height = 250, width = 250/>`             
  })
}
const randomHero = () =>{
  const numberOfHeroes = 731
  return Math.floor(Math.random()* numberOfHeroes)+1
}

SuperHeroButton.onclick = () => getSuperHero(randomHero())
//const img = "https://www.superherodb.com/pictures2/portraits/10/100/85.jpg"




//document.querySelector('body').innerHTML += 'goodbye'