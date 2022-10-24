import React from 'react'
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({ title, poster_path, vote_average, realease_date, overview }) => {
    return (
        <div className='card text-center bg-secondary mb-3'>
            <div className='card-body'>
                <img className='card-img-top' src={API_IMG + poster_path} alt="" />
                <div className='card-body'>
                    <button type='button' className='btn btn-dark'>View More</button>
                </div>
            </div>

        </div>
    )
}
export default MovieBox;