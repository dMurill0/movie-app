import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faTelevision } from '@fortawesome/free-solid-svg-icons';
import MovieBox from './components/MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=1976c380dd1c386feb7c2778eef34284&language=es";
const API_URL_TV = "https://api.themoviedb.org/3/tv/popular?api_key=1976c380dd1c386feb7c2778eef34284&language=es-ES&page=1";
function App() {

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  {
    //if toggle movies useEffect con API de movies
  }
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        //console.log(data);
        setMovies(data.results);
      })
  }, [])


  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=1976c380dd1c386feb7c2778eef34284&query=${query}&language=es-ES`;
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    }
    catch (e) {
      console.log(e);
    }
  }

  const changeHandler = (e) => {
    setQuery(e.target.value);
  }
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <div className='form-check form-switch'>
            <div className='icons'>
              {/* <span><FontAwesomeIcon icon={faFilm} color="white" size='1x' /></span> */}
              {/* <span><FontAwesomeIcon icon={faTelevision} color="white" size="1x" /></span> */}
              <img src="./images/movie.png" style={{ height: "30px", boxShadow: "none", marginRight: "5px" }} alt="" />
              <img src="./images/series.png" style={{ height: "30px", boxShadow: "none" }} alt="" />
            </div>
            <div className='inputs'>
              <input type="checkbox" className="form-check-input" value="" id="check1" />
              <input type="checkbox" className="form-check-input" value="" id="check2" />
            </div>

          </div>
          <div className='title'>
            <h1><a className="logo" href='/index.html'>MOVIEDB</a></h1>
          </div>

          <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

          <Navbar.Collapse id="nabarScroll">
            <Nav
              className="me-auto my-2 my-lg-3"
              style={{ maxHeight: '100px' }}
              navbarScroll></Nav>

            <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
              <FormControl
                type="search"
                placeholder="Buscar película"
                className="me-2"
                aria-label="search"
                name="query"
                value={query} onChange={changeHandler}></FormControl>
              <Button variant="secondary" type="submit">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        {movies.length > 0 ? (
          <div className="container">
            <div className="grid">
              {movies.map((movieReq) =>

                <MovieBox key={movieReq.id} {...movieReq} />)}
            </div>
          </div>
        ) : (
          <h2>Sorry !! No Movies Found</h2>
        )}
      </div>
      <footer className="text-center text-lg-start bg-dark text-muted">
        <div className="text-center p-4">
          © 2022 Copyright:
          <h5 className="text-reset fw-bold"  >Daniel Murillo</h5>
        </div>
      </footer>
    </>

  );
}

export default App;