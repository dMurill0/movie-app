import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Trending from '../Trending';
import { NavLink } from 'react-router-dom';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=1976c380dd1c386feb7c2778eef34284&language=es";
const API_URL_TV = "https://api.themoviedb.org/3/tv/popular?api_key=1976c380dd1c386feb7c2778eef34284&language=es-ES&page=1";

const MainNav = () => {

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
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

    <div>
      <Navbar bg="dark" expand="xl" variant="dark" className='fixed-top '>
        <Container fluid className='justify-content-between mx-auto px-auto'>
          {/* LOGO */}
          <div className='title '>
            <h1 className='ml-auto'><a className="logo ml-auto" href='/index.html'>MOVIEDB</a></h1>
          </div>
          {/* MENU */}
          <div className="" id='navbarCollapse'>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/" id='navLink' className={({ isActive }) => isActive ? "active" : ""}>Popular</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/peliculas" id='navLink' className={({ isActive }) => isActive ? "active" : ""}>Peliculas</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/series" id='navLink' className={({ isActive }) => isActive ? "active" : ""}>Series</NavLink>
              </li>
            </ul>
          </div>

          {/* BUSQUEDA */}
          {/* <Nav
            className=""
            style={{ maxHeight: '100px', }}
            navbarScroll></Nav>
          <Form className="d-flex" onSubmit={searchMovie} autoComplete="off" style={{ display: "none" }}>
            <FormControl
              type="search"
              placeholder="Buscar película"
              className="me-2"
              aria-label="search"
              name="query"
              value={query} onChange={changeHandler}
            ></FormControl>
            <Button variant="secondary" type="submit">Buscar</Button>
          </Form> */}

        </Container>
      </Navbar></div>
  )
}

export default MainNav

