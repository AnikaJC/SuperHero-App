
const getSuperHero =() => {
  fetch('https://superheroapi.com/api.php/10223569763528853/346')
  .then(response => response.json())
  .then(json => console.log(json.image.url))
}
getSuperHero()