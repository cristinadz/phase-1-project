document.addEventListener("DOMContentLoaded", ()=>{
    fetch('https://ghibliapi.herokuapp.com/films')
        .then(resp => resp.json())
        .then (filmsArray => {
            renderSide(filmsArray)
        })
})

const renderSide = filmsArray => filmsArray.forEach(titleLoop)

const collection = document.querySelector('#collection')
    console.log(collection)

const titleLoop = (filmObj) => {
    const sideList = document.createElement('li')
    sideList.textContent = filmObj.title
    collection.append(sideList)
}
       