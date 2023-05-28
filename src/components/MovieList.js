import React from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import { movies } from './Movies';

function MovieList() { 
  return (
    <div style={{textAlign:"center"}}x>
    
        <h1> Movie Card</h1>
        <Link to={`/trailer/${movies.id}`}>
        {
            movies.map(movie=>
                <MovieCard  movie={movie}/>
            
        )}
        </Link>
        
    </div>
  )
}

export default MovieList