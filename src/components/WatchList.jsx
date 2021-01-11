import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {Link} from 'react-router-dom'

const WatchList = (props) => {
  const {watchlist} = useContext(GlobalContext)
  const {removeMovieFromWatchList} = useContext(GlobalContext)

  
  return(
    <>
        {watchlist.map((movie) => (
        <div className="col-sm-4 mb-4">
        <div className="card">
          <img 
           height="330" 
           src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
           className="card-img-top" 
           alt="..." />
           <div className="card-body">
            <h6>{movie.title}</h6>
            {/* <p className="card-text">{movie.overview.substring(0, 50)}..</p> */}
            <p className="card-text">Release Date : {movie.release_date ? movie.release_date.substring(0,4) : "-"}</p>
             <Link to={`/movie/${movie.id}`} className="btn btn-dark mr-3">Read More</Link>
            <button className="btn btn-dark" type="submit" onClick={() => removeMovieFromWatchList(movie.id)}>Remove</button>
           </div>
        </div>
        </div>
      ))}
    </>
  )
}

export default WatchList