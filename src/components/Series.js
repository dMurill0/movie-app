import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import SerieBox from './SerieBox';

const API_URL_TV = "https://api.themoviedb.org/3/tv/popular?api_key=1976c380dd1c386feb7c2778eef34284&language=es-ES&page=1";
export const Series = () => {
    const [series, setSeries] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        fetch(API_URL_TV)
            .then((res) => res.json())
            .then(data => {
                setSeries(data.results);
                console.log(data.results);
            })
    }, [])


    const searchSerie = async (e) => {
        e.preventDefault();
        console.log("Searching");
        try {
            const url = `https://api.themoviedb.org/3/search/tv?api_key=1976c380dd1c386feb7c2778eef34284&query=${query}&language=es-ES`;
            const res = await fetch(url);
            const data = await res.json();
            setSeries(data.results);

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
                        <h1><a className="logo" href='/index.html'>SERIEDB</a></h1>
                    </div>

                    <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

                    <Navbar.Collapse id="nabarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-3"
                            style={{ maxHeight: '100px' }}
                            navbarScroll></Nav>

                        <Form className="d-flex" onSubmit={searchSerie} autoComplete="off">
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
                <h1 className='title'>Series</h1>

                {series.length > 0 ? (
                    <div className="container">
                        <div className="grid">
                            {series.map((serieReq) =>

                                <SerieBox key={serieReq.id} {...serieReq} />)}
                        </div>
                    </div>
                ) : (
                    <h2>Sorry !! No Movies Found</h2>
                )}
            </div>
        </>

    );

}
export default Series;