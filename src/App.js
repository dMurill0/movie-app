import React, { useState, useEffect } from 'react';
import './App.css';
import MovieBox from './components/MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from './components/layouts/MainNav';
import Trending from './components/Trending';
import Footer from './components/layouts/Footer';
import Movies from './components/Movies';
import MyRoutes from './components/routes/MyRoutes';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=1976c380dd1c386feb7c2778eef34284&language=es";

function App() {

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        setMovies(data.results);
      })
  }, [])

  return (
    <>

      {/* <Trending /> */}
      <MyRoutes />
    </>

  );
}

export default App;