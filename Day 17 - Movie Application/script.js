const API_URL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?query='";
const IMG_PATH = "https://image.tmdb.org/t/p/original";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Yjc5M2NiMGEyOTM4ZDNjNzNlM2MwNGFiNzNjYTNhZSIsIm5iZiI6MTc4MDgxMTA2NC41NzMsInN1YiI6IjZhMjUwNTM4MmNkMWQyZjE3MzJhMWZkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iLYqXBaAqpRqqzd1W1DGK_lcf51SF6nMDZ1KJHyeq4g",
  },
};

const form = document.getElementById("form");
const main = document.getElementById("main");
const searchEl = document.getElementById("search");

getMovies(API_URL, options);

async function getMovies(url) {
  const res = await fetch(url, options);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}" />
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average.toFixed(1)}</span>
        </div>

        <div class="overview">
            <h3>Overview</h3>
            <p>
            ${overview}
            </p>
        </div>
    `;

    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = searchEl.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_URL + searchTerm, options);

    searchEl.value = "";
  } else {
    window.location.reload();
  }
});
