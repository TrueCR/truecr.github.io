import React from 'react';

const MovieList = () => {
  const movies = require('@/app/data/movies.json');

  return (
    <div className='bg-slate-50 w-auto mx-20 my-10 rounded-lg shadow-md p-1'>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id} className='bg-slate-200 mx-5 my-2 p-2 shadow rounded '>
            <strong className=' text-xl'>{movie.title}</strong> ({movie.year})<br />
            <strong>Actors:</strong> {movie.actors ? movie.actors.join(', ') : 'N/A'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
