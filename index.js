document.addEventListener("DOMContentLoaded", () => {
  fetch("https://ghibliapi.herokuapp.com/films")
    .then((resp) => resp.json())
    .then((filmsArray) => {
      renderSide(filmsArray);
    });

  const renderSide = (filmsArray) => filmsArray.forEach(titleLoop);

  const collection = document.getElementById("collection");
  const detailsContainer = document.getElementById("film-details");

  const titleLoop = (filmObj) => {
    const sideList = document.createElement("ul");
    sideList.textContent = filmObj.title;
    collection.append(sideList);
    sideList.addEventListener("click", () => renderDetails(filmObj));
  };

  const renderDetails = (filmObj) => {
    detailsContainer.innerHTML = "";
    const img = document.createElement("img");
    const title = document.createElement("h2");
    const description = document.createElement("p");

    img.src = filmObj.image;
    title.textContent = filmObj.title;
    description.textContent = filmObj.description;
    detailsContainer.append(img, title, description);
  };
});
