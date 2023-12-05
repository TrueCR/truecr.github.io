/*
  CPRG306 Assignment #3

  Allows Users with the Admin role to see the Movies in a list from the JSON file
  as well have multiple buttons that give the User access to editing, deleting or
  adding new movies

  Inputs:
  - The initial state of the movies is loaded from a JSON file using require('@/app/data/movies.json').
  - User interactions with the UI, such as clicking buttons to add, edit, delete, save, or cancel movie operations.

  Processing:
  1. State Management:
    - State variables are used to manage the movies, adding/editing status, and edit data.
    - The useState hook is used to initialize and manage state variables.

  2. Movie Operations:
    - handleAdd: Sets the state to indicate the intention to add a new movie.
    - handleEdit: Sets the edit data and updates the state to indicate the intention to edit an existing movie.
    - handleDelete: Filters the movies array to remove a movie based on its ID.
    - handleSave: Saves changes to the movie list, either by adding a new movie or editing an existing one.
    - handleCancel: Cancels the add/edit operation by resetting the state.

  Outputs:
  - The component renders a user interface allowing users to view, add, edit, and delete movies.
  - The movie list is displayed with individual movie details, including title, year, actors, and buttons for editing or deleting movies.

  Authors: Julien Lam, Elvis Chizoba, Tyler Gettle
  Version: 2023-12-04
*/


'use client';
import React, { useState } from 'react';
import MovieForm from './MovieForm';

// Main functional component for editing movie list
const EditMovieList = () => {
  // State variables for managing movies, adding, editing, and edit data
  const [movies, setMovies] = useState(require('@/app/data/movies.json'));
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(null);

  // Function to handle adding a new movie
  const handleAdd = () => {
    setIsAdding(true);
  };

  // Function to handle editing a movie
  const handleEdit = (movie) => {
    setEditData(movie);
    setIsEditing(true);
  };

  // Function to handle deleting a movie
  const handleDelete = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };

  // Function to handle saving changes to a movie
  const handleSave = (formData) => {
    if (isAdding) {
      // Adding a new movie
      setMovies([...movies, { id: Date.now(), ...formData }]);
    } else if (isEditing && editData) {
      // Editing an existing movie
      const updatedMovies = movies.map((movie) =>
        movie.id === editData.id ? { ...movie, ...formData } : movie
      );
      setMovies(updatedMovies);
      setEditData(null);
      setIsEditing(false);
    }

    // Resetting state for adding/editing mode
    setIsAdding(false);
  };

  // Function to handle canceling the add/edit operation
  const handleCancel = () => {
    setIsAdding(false);
    setIsEditing(false);
    setEditData(null);
  };

  // JSX rendering based on the state of adding/editing movies
  return (
    <div className='bg-slate-50 w-auto mx-20 my-10 rounded-lg shadow-md p-1'>
      {isAdding || isEditing ? (
        // Render MovieForm component for adding/editing movies
        <MovieForm onSave={handleSave} onCancel={handleCancel} initialData={editData} />
      ) : (
        // Render movie list and add movie button
        <div>
          <ul>
            {movies.map((movie) => (
              // Render individual movie details and edit/delete buttons
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

// Exporting the component for external use
export default EditMovieList;
