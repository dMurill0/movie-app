import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react'
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({ id, title, poster_path, vote_average, release_date, overview }) => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const API_SRCHes = "https://api.themoviedb.org/3/movie/${id}?api_key=1976c380dd1c386feb7c2778eef34284&language=es";
    return (
        <div className='card text-center bg-secondary mb-3'>
            <div className='card-body'>

                <div className='card-img-top'>
                    <a onClick={handleShow}><img class='img-fluid' src={API_IMG + poster_path} alt="" /></a>
                </div>


                <div className='card-body'>
                    <button type='button' className='btn btn-info' onClick={handleShow}>Ver más</button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img className='card-img-top' src={API_IMG + poster_path} alt="poster" />
                            <h3>{title}</h3>
                            <span><img class="img-fluid" src='../images/imdb.png' height="50px" width="60px" alt='imdb' /> {vote_average}</span>
                            <h5>Fecha de Estreno: </h5><p>{release_date}</p>
                            <br></br>
                            <p>{overview}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="info" onClick={handleClose}>Cerrar</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>

        </div>
    )
}
export default MovieBox;