import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'

function Movie(props) {
    const {id, title, poster_path, overview, release_date} = props.movie
    const { addMovieToWatchList } = useContext(GlobalContext)
    const {watchlist} = useContext(GlobalContext)


    let storedMovie = watchlist.find(findMovie => findMovie.id === props.movie.id)
    const watchlistDisabled = storedMovie ? true : false
    console.log(props)
    return (
      <div className="col-sm-4 mb-4">
      <div className="card">
        <img height="330" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <p className="card-text">{overview.substring(0, 50)}..</p>
          <p className="card-text">Release Date : {release_date ? release_date.substring(0,4) : "-"}</p>
          <div className="text-center">
            <Link to={`/movie/${id}`} className="btn btn-dark">Read More</Link>
            <button 
              className="btn btn-dark mx-2" 
              onClick={() => addMovieToWatchList(props.movie)}
              disabled = {watchlistDisabled}
              >Add to List
            </button>
          </div>
        </div>
      </div>
      </div>
    )
  }

  Movie.defaultProps = {
    movie: {
        title: "None",
        img: "https://picsum.photos/id/100/400/300"
    }
}

export default Movie
