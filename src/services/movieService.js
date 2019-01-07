
const API_KEY = '61235ac9e4979ee2d0f4a4baf05eeef4'

export default {
  fetchMovies,
  getMovieById
}

async function fetchMovies(term, page) {
  const movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${term}&page=${page}`)
  return await movies.json()
}

async function getMovieById(id) {
  const movie = await fetch(`https://api.themoviedb.org/3/movie/${id}?&api_key=${API_KEY}&append_to_response=videos`)
  return await movie.json()
}