import React, { useEffect, useState } from 'react'; 
import './List.css'
import axios from '../../axios';

function List({title, fetchUrl, isLargeList = false}) {
    const [movies, setMovies] = useState([]);
    const baseURL = 'https://image.tmdb.org/t/p/original/';

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
    <div className='list'>
      <h2>{title}</h2>
    <div className='list-posters'>
      {movies.map((movie) => 
            //if isLargeList is true, then use the poster_path, else use the backdrop_path
            ((isLargeList && movie.poster_path) || (!isLargeList && movie.backdrop_path)) && (
            <img 
                className={`list-poster ${isLargeList && 'list-poster-large'}`}
                key={movie.id}
                src={`${baseURL}${isLargeList ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name}
            />
            )
      )};
      </div>
    </div>
  )
}

export default List;
