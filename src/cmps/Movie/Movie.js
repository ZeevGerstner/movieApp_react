import React from 'react'
import { Link } from 'react-router-dom'
import './movie.css'
const Movie = ({ movie }) => (

    <Link
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})` }}
        to={`/movie/${movie.id}`}>
        {movie.title}
    </Link>


)

export default Movie