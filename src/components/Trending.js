import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import MovieBox from './MovieBox';
import SerieBox from './SerieBox';

const API_URL = "https://api.themoviedb.org/3/trending/all/day?api_key=1976c380dd1c386feb7c2778eef34284&language=es";


const Trending = () => {

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
                <h1 className='title'>Popular</h1>
                {content.length > 0 ? (
                    <div className="container p-lg-2">
                        <div className="grid">
                            {content.map((movieReq) =>
                                movieReq.release_date != null ? (
                                    <MovieBox key={movieReq.id} {...movieReq} />
                                ) : (
                                    <SerieBox key={movieReq.id} {...movieReq} />
                                )
                            )}
                        </div>
                    </div>
                ) : (
                    <h2>Sorry !! No Movies Found</h2>
                )}
            </div>
        </div>
    )
}

export default Trending