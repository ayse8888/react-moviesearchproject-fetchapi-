import React from 'react'
import {movieDatas} from '../data/MovieData'
import MovieCard from './MovieCard'

const Home = () => {
  const colSize = "4"
   const movieCardList = movieDatas.map(item => (
    <div className={`col-sm-${colSize} my-5`}>
    <MovieCard id={item.id} name={item.name} url={item.url} text={item.text}/>
    </div>))
  return(
    <>
    <div className="home">
        <ul>
          <li>
            <a href="#">Family</a>
          </li>
          <li>
            <a href="#">Action</a> 
          </li>
          <li>
            <a href="#">Animation</a>
          </li>
          <li>
            <a href="#">Documentary</a>
          </li>
          <li>
            <a href="#">Science Fiction</a>
          </li>
          <li>
            <a href="#">Drama</a>
          </li>
          <li>
            <a href="#">Fantastic</a>
          </li>
          <li>
            <a href="#">Adventure</a>
          </li>
          <li>
            <a href="#">Thriller</a>
          </li>
          <li>  
            <a href="#">Crime</a>
          </li>
           <li>
            <a href="#">Horror</a>
          </li>
           <li>
            <a href="#">Biography</a>
          </li>
           <li>
            <a href="#">Comedy</a>
          </li>
          <li>
            <a href="#">Romantic</a>
          </li>
          <li>
            <a href="#">History</a>
          </li>
        </ul>
        <div className ="movies">
          <h3 className="most-watched">MOST WATCHED</h3>
          <div className="row">{movieCardList}</div>
        </div>
      </div>
    </>
  )
}

export default Home