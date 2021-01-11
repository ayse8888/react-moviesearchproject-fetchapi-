import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Movie from './components/Movie'
import movieInfo from './result/movieInfo.json'
import MovieDetails from "./components/MovieDetails"
import ErrorPage from "./components/error/ErrorPage"
import Header from './components/Header'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import { GlobalProvider } from './context/GlobalState'
import Login from "./components/Login";
import WatchList from "./components/WatchList";
import Home from './components/Home'
import './style.css'

const API_KEY = "0ecede2e93db3d208afce55b40229dbf"

function App() {
  const [movieQquery, setMovieQuery] = useState("")
  const [allMovies, setAllMovies] = useState([])


  const submitHandler = (event) => {
    event.preventDefault()
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${movieQquery}`
    fetch(URL).then(response => response.json())
    .then(data => setAllMovies(
      data.results 
      )
    )

  }

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <Switch>
              <Route exact path="/search">
                <div className="col-sm-12">
                </div>
                <div className="col-sm-12 mb-5">
                  <form>
                    <div className="row">
                      <div className="col">
                        <input 
                          type="text" 
                          className="form-control" 
                          placeholder="Search Movies" 
                          name="query" 
                          onChange={event => setMovieQuery(event.target.value)} 
                        />
                      </div>
                      <div className="col">
                        <button onClick={submitHandler} type="submit" className="btn btn-dark">Search</button>
                      </div>
                    </div>
                  </form>
                </div>
                {
                  allMovies.filter(item => item.poster_path)
                  .map(item => <Movie key={item.id} movie={item} />)
                }
              </Route>
              <Route exact path="/watchlist">
                <WatchList />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/Login">
                <Login />
              </Route>
              <Route path="/movie/:movieID">
                <MovieDetails allMovies={allMovies} />
              </Route>

              <Route path="/404">
                <ErrorPage />
              </Route>
              <Redirect from="*" to="/404" />
              
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;