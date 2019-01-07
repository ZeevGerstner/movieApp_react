import React, { Component } from 'react';
import './movieDetails.css'
import movieService from '../../services/movieService'
import YoutubePlayer from '../YoutubePlayer/YoutubePlayer'

class MovieDetails extends Component {

  constructor() {
    super()
    this.state = {
      movie: null,
      playTrailer: false,
      videoId: ''
    }
  }

  render() {
    const { movie, playTrailer, videoId } = this.state
    return (
      <div className="movie-details">
        {movie && videoId &&
          <div className="movie-container" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})` }}>
            <div className="movie-header">
              <h1>{movie.title}</h1>
              <div>IMDB rate : <span className="rate">{movie.vote_average}</span></div>
              {/* <button @click=""></button> */}
            </div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
            <YoutubePlayer videoId={videoId} />
          </div>
        }
      </div>
    )
  }

  // "belongs_to_collection": { "id": 263, "name": "The Dark Knight Collection", 
  // "budget": 150000000, 
  //"genres": [{ "id": 28, "name": "Action" }, { "id": 80, "name": "Crime" }, { "id": 18, "name": "Drama" }], 
  //homepage": "http://www2.warnerbros.com/batmanbegins/index.html", 
  //"id": 272, "imdb_id": "tt0372784", 
  //"original_language": "en", "original_title": "Batman Begins", 
  //"overview": "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.", "popularity": 25.596, "poster_path": "/dr6x4GyyegBWtinPBzipY02J2lV.jpg", "production_companies": [{ "id": 429, "logo_path": "/2Tc1P3Ac8M479naPp1kYT3izLS5.png", "name": "DC Comics", "origin_country": "US" }, { "id": 923, "logo_path": "/5UQsZrfbfG2dYJbx8DxfoTr2Bvu.png", "name": "Legendary Entertainment", "origin_country": "US" }, { "id": 9993, "logo_path": "/2Tc1P3Ac8M479naPp1kYT3izLS5.png", "name": "DC Entertainment", "origin_country": "US" }, { "id": 9996, "logo_path": "/3tvBqYsBhxWeHlu62SIJ1el93O7.png", "name": "Syncopy", "origin_country": "GB" }, { "id": 19231, "logo_path": null, "name": "Patalex III Productions Limited", "origin_country": "" }, { "id": 174, "logo_path": "/ky0xOc5OrhzkZ1N6KyUxacfQsCk.png", "name": "Warner Bros. Pictures", "origin_country": "US" }], "production_countries": [{ "iso_3166_1": "GB", "name": "United Kingdom" }, { "iso_3166_1": "US", "name": "United States of America" }], "release_date": "2005-06-10", "revenue": 374218673, "runtime": 140, "spoken_languages": [{ "iso_639_1": "en", "name": "English" }, { "iso_639_1": "ur", "name": "اردو" }, { "iso_639_1": "zh", "name": "普通话" }], 
  //"status": "Released", "tagline": "Evil fears the knight.", 
  //"title": "Batman Begins", "video": false, "vote_average": 7.6, "vote_count": 11059





  async componentDidMount() {
    const id = this.props.match.params.id
    var movie = await movieService.getMovieById(id)
    var videoId = movie.videos.results[0].key
    this.setState({ movie, videoId })
  }

  async openTrailer(movie) {


  }

}

export default MovieDetails
