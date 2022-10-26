import React, { useState, useEffect } from 'react';
import './App.css';
import MovieBox from './components/MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=1976c380dd1c386feb7c2778eef34284&language=es";
function App() {

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      })
  }, [])


  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=1976c380dd1c386feb7c2778eef34284&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
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
          <div className='title'>
            <a href=''><h1>MOVIEDB</h1></a>
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
      <footer class="text-center text-lg-start bg-dark text-muted">
        <div class="text-center p-4">
          © 2022 Copyright:
          <p class="text-reset fw-bold">Daniel Murillo</p>
        </div>
      </footer>
    </>

  );
}

export default App;