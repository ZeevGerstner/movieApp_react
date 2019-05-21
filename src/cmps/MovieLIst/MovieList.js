import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import movieService from '../../services/movieService'
import './movieList.css'
class MovieList extends Component {

  constructor() {
    super()
    this.state = {
      movies: [],
      page: 1
    }
  }

  render() {
    const { movies } = this.state
    return (
      <div>
        <div className="search">
          <input type="text" placeholder="search movie" />
          <button onClick={this.loadMovies.bind(this)}>search</button>
        </div>
        {/* <button onClick={this.loadMovie.bind(this,2)}>more results</button> */}
        <div className="movie-list">
          {
            movies.length > 0 &&
            movies.map(movie => (
              <Movie
                movie={movie}
                key={movie.id}
              />
            ))
          }
        </div>
      </div>
    )
  }

  async componentDidMount() {
    var movies = await this.loadMoviesByCat()
    this.setState({ movies })
  }

  async loadMoviesByCat(term = 'now-playing') {
    var movies = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=61235ac9e4979ee2d0f4a4baf05eeef4&language=en-US&page=1`)
    movies = await movies.json()
    return movies.results
  }

  async loadMovies(page = 1) {
    var term = document.querySelector('input').value
    var movies = await movieService.fetchMovies(term, page)
    this.setState({ movies: movies.results })
  }

}
export default MovieList;


