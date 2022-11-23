import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieBox from './MovieBox';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=1976c380dd1c386feb7c2778eef34284&language=es";


const Movies = () => {

    const [content, setContent] = useState([]);

    const fetchTrending = async () => {
        const { data } = await axios.get(API_URL);
        setContent(data.results)
        console.log(data.results);
    }

    useEffect(() => {
        fetchTrending();
    }, [])
    return (
        <div>
            <div className='container-fluid mt-5 pt-5 flex-column '>
                <h1 className='title'>Peliculas</h1>
                {content.length > 0 ? (
                    <div className="container p-lg-2">
                        <div className="grid">
                            {content.map((movieReq) =>

                                <MovieBox key={movieReq.id} {...movieReq} />)}
                        </div>
                    </div>
                ) : (
                    <h2>Sorry !! No Movies Found</h2>
                )}
            </div>
        </div>
    )
}

export default Movies