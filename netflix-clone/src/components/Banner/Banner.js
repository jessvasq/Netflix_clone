import React, { useEffect, useState } from 'react'; 
import './Banner.css';
import axios from '../../axios';
import requests from '../../requests';

function Banner() {

    const [movie, setMovie] = useState([]);
    
    //fetch a random movie from the netflix originals list by using a async function
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    //get a random movie from the list
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        //call the function to fetch the data
        fetchData();
    }, []);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }
        
    return (
        <header className='banner' style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center center'
        }}>

            <div className='banner-content'>
                <h1 className='banner-title'>{ movie?.title || movie?.name || movie?.original_name } </h1>
                <div className='banner-buttons'>
                    <button className='banner-bttn'>Play</button>
                    <button className='banner-bttn'>My List</button>
                </div>
                <h1 className='banner-desc'> 
                {truncate(movie?.overview, 180)}
                </h1>
            </div>

            <div className='banner-fadeBottom'/>

        </header>
  )
}

export default Banner;
             