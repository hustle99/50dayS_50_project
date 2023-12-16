const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=14d375d3751b4ea54fee56f29ed116e2&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=14d375d3751b4ea54fee56f29ed116e2&query="';

const form = document.getElementById("form");

const search = document.getElementById("search");

const main = document.getElementById("main");

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);

    search.value = " ";
  } else {
    window.location.reload();
  }
});

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEL = document.createElement("div");

    movieEL.classList.add("movie");

    movieEL.innerHTML = ` <div class="movie">
    <img
      src="${IMG_PATH + poster_path}" 
      alt="${title}">
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassbyRate(vote_average)}">"${vote_average}"</span>
    </div>
    <div class="overview">
      <h3>overview</h3>
      ${overview}
    </div>
  </div>
    `;
    main.appendChild(movieEL);
  });
}

function getClassbyRate(Vote) {
  if (Vote >= 8) {
    return "green";
  } else if (Vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}
