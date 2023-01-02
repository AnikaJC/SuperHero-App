const SUPERHERO_TOKEN = '10223569763528853'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`
const getSuperHero =(id, name) => {
  fetch(`${BASE_URL}/${id}`)
  .then(response => response.json())
  .then(json => {
    console.log(json)
    document.querySelector('body').innerHTML += `<img src = "${json.image.url}" height = 250, width = 250/>`             
  })
}
getSuperHero(346)
//const img = "https://www.superherodb.com/pictures2/portraits/10/100/85.jpg"




//document.querySelector('body').innerHTML += 'goodbye'