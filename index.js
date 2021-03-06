document.addEventListener("DOMContentLoaded", () => {
  fetch("https://ghibliapi.herokuapp.com/films")
    .then((resp) => resp.json())
    .then((filmsArray) => {
      renderSide(filmsArray);
      renderDetails(filmsArray[10]);
    });

  const renderSide = (filmsArray) => filmsArray.forEach(titleLoop);

  const collection = document.getElementById("collection");
  const detailsContainer = document.getElementById("film-details");
  const form = document.getElementById("review-form");

  const titleLoop = (filmObj) => {
    const sideList = document.createElement("ul");
    sideList.textContent = filmObj.title;
    collection.append(sideList);
    sideList.addEventListener("click", () => renderDetails(filmObj));
  };

  const renderDetails = (filmObj) => {
    detailsContainer.innerHTML = "";
    const img = document.createElement("img");
    const title = document.createElement("h1");
    const director = document.createElement("h3");
    const producer = document.createElement("h3");
    const releaseDate = document.createElement("p");
    const rating = document.createElement("p");
    const description = document.createElement("p");

    img.src = filmObj.image;
    title.textContent = filmObj.title;
    director.textContent = `Director: ${filmObj.director}`;
    producer.textContent = `Producer: ${filmObj.producer}`;
    releaseDate.textContent = `Release Date: ${filmObj.release_date}`;
    rating.textContent = `Rating: ${filmObj.rt_score}`;

    description.textContent = filmObj.description;
    detailsContainer.append(
      img,
      title,
      director,
      producer,
      releaseDate,
      rating,
      description
    );
    document.querySelector("#user-review h3").textContent = "";
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nameRating = document.createElement("p");
    nameRating.textContent = `Name: ${e.target.name.value}`;
    const ratingList = document.createElement("p");
    ratingList.textContent = `Rating: ${e.target.rating.value}`;
    const reviewList = document.createElement("p");
    reviewList.textContent = `Review: ${e.target.review.value}`;
    const wholeList = document.createElement("li");
    const wholeReview = wholeList.className;
    wholeList.append(nameRating, ratingList, reviewList);
    document.querySelector("#user-review h3").append(wholeList);
    e.target.reset();
  });
});
