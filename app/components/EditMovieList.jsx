'use client'
import React, { useState } from 'react';
import MovieForm from './MovieForm';

const EditMovieList = () => {
  const [movies, setMovies] = useState(require('@/app/data/movies.json'));
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleAdd = () => {
    setIsAdding(true);
  };

  const handleEdit = (movie) => {
    setEditData(movie);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };

  const handleSave = (formData) => {
    if (isAdding) {
      setMovies([...movies, { id: Date.now(), ...formData }]);
    } else if (isEditing && editData) {
      const updatedMovies = movies.map((movie) =>
        movie.id === editData.id ? { ...movie, ...formData } : movie
      );
      setMovies(updatedMovies);
      setEditData(null);
      setIsEditing(false);
    }

    setIsAdding(false);
  };

  const handleCancel = () => {
    setIsAdding(false);
    setIsEditing(false);
    setEditData(null);
  };

  return (
    <div className='bg-slate-50 w-auto mx-20 my-10 rounded-lg shadow-md p-1'>
      {isAdding || isEditing ? (
        <MovieForm onSave={handleSave} onCancel={handleCancel} initialData={editData} />
      ) : (
        <div>
          <ul>
            {movies.map((movie) => (
              <li key={movie.id} className='bg-slate-200 mx-5 my-2 p-2 shadow rounded '>
                <strong className='text-xl'>{movie.title}</strong> ({movie.year})<br />
                <strong>Actors:</strong> {Array.isArray(movie.actors) ? movie.actors.join(', ') : 'N/A'}<br />
                <button onClick={() => handleEdit(movie)} className='bg-yellow-500 p-1 rounded-lg text-white'>Edit</button>{' '}
                <button onClick={() => handleDelete(movie.id)} className='bg-red-500 p-1 rounded-lg text-white'>Delete</button>
              </li>
            ))}
          </ul>
          <button onClick={handleAdd} className=' bg-green-500 p-1 rounded-lg text-white my-2 mx-5'>Add Movie</button>
        </div>
      )}
    </div>
  );
};

export default EditMovieList;
