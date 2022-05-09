document.addEventListener("DOMContentLoaded", ()=>{
    fetch('https://ghibliapi.herokuapp.com/films')
        .then(resp => resp.json)
        .then (filmsArray => {
            
        })
})