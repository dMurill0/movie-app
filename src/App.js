import React, { useEffect, useState } from 'react';
import MovieBox from './components/MovieBox';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=1976c380dd1c386feb7c2778eef34284";

function App() {

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(API_URL).then((res) => res.json()).then(data => {
      console.log(data);
      setMovies(data.results);
    })
  }, [])


  return (
    <div >
      {movies.map((movieReq) => <MovieBox key={movieReq.id}{...movieReq} />)}
    </div>
  );
}

export default App;
