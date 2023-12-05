/*
  CPRG306 Assignment #3

  Displays the list of movies to the user from the JSON file

  Input: None

  Processing:
  - Fetches the list of movies from the data source.

  Output:
  - Renders an unordered list of movies with individual details.

  Authors: Julien Lam, Elvis Chizoba, Tyler Gettle
  Version: 2023-12-04
*/

import React from 'react';

// Functional component for displaying a list of movies
const MovieList = () => {
  // Fetching the list of movies from the data source
  const movies = require('@/app/data/movies.json');

  // JSX rendering for the MovieList component
  return (
    <div className='bg-slate-50 w-auto mx-20 my-10 rounded-lg shadow-md p-1'>
      {/* Rendering an unordered list of movies */}
      <ul>
        {movies.map((movie) => (
          // Rendering individual movie details with styling
          <li key={movie.id} className='bg-slate-200 mx-5 my-2 p-2 shadow rounded '>
            {/* Movie title and year */}
            <strong className=' text-xl'>{movie.title}</strong> ({movie.year})<br />
            {/* Displaying actors or 'N/A' if actors are not available */}
            <strong>Actors:</strong> {movie.actors ? movie.actors.join(', ') : 'N/A'}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Exporting the MovieList component for external use
export default MovieList;
