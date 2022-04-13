let body = document.querySelector('body')
let h1 = document.querySelector('h1')

let dark = prompt('¿Desea modo oscuro?')

if (dark === "si"){
    body.style.backgroundColor = '#7f7f7f';
    body.classList.add('fondoMoviesList')
}

h1.innerText += "LISTADO DE PELICULAS"

h1.style = "color: white; background-color: teal; padding: 20px;"