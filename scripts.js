const movies = [
  // Add movie objects here with 'title', 'image', and 'id' properties
  // Example: { title: 'Movie Title', image: 'movie-image.jpg', id: 1 }
];

const search = document.getElementById('search');
const moviesContainer = document.getElementById('movies');
const favoritesList = document.getElementById('favorites-list');

function createMovieCard(movie) {
  const movieCard = document.createElement('div');
  movieCard.classList.add('movie');
  movieCard.innerHTML = `
    <h3>${movie.title}</h3>
    <img src="${movie.image}" alt="${movie.title}">
    <button onclick="addToFavorites(${movie.id})">Add to Favorites</button>
  `;
  return movieCard;
}

function displayMovies(filteredMovies) {
  moviesContainer.innerHTML = '';
  filteredMovies.forEach((movie) => {
    const movieCard = createMovieCard(movie);
    moviesContainer.appendChild(movieCard);
  });
}

function filterMovies(query) {
  return movies.filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()));
}

function addToFavorites(movieId) {
  const movie = movies.find((m) => m.id === movieId);
  const listItem = document.createElement('li');
  listItem.textContent = movie.title;
  favoritesList.appendChild(listItem);
}

search.addEventListener('input', (e) => {
  const query = e.target.value;
  const filteredMovies = filterMovies(query);
  displayMovies(filteredMovies);
});

displayMovies(movies);
