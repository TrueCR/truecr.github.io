/*
  CPRG306 Assignment #3

  Allows Users with the Admin role to edit the required movies
  as well as add more movies or delete them

  Input: 
  - Prop data for onSave, onCancel, and initialData.

  Processing:
  1. State Management:
    - State variable formData manages the form data.
    - handleInputChange function updates formData based on user input.

  2. Save Operation:
    - handleSave function invokes onSave prop with formData.

  Output: 
  - Renders a form with input fields for movie title, year, and actors.
  - Save and Cancel buttons trigger respective operations.

  Authors: Julien Lam, Elvis Chizoba, Tyler Gettle
  Version: 2023-12-04
*/

import React, { useState } from 'react';

// Functional component for a Movie Form
const MovieForm = ({ onSave, onCancel, initialData }) => {
  // State variable to manage form data
  const [formData, setFormData] = useState(initialData || { title: '', year: '', actors: '' });

  // Function to handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Handling special case for 'actors' field (comma-separated string converted to an array)
    if (name === 'actors') {
      const actorsArray = value.split(',').map((actor) => actor.trim());
      setFormData((prevData) => ({ ...prevData, [name]: actorsArray }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  // Function to handle saving form data
  const handleSave = () => {
    onSave(formData);
  };

  // JSX rendering for the MovieForm
  return (
    <div className='mx-5 my-2 p-2 bg-slate-200 rounded shadow'>
      {/* Input field for movie title */}
      <label className='text-lg font-semibold mr-7'>Title:</label>
      <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
      <br />
      {/* Input field for movie year */}
      <label className='text-lg font-semibold mr-7'>Year:</label>
      <input type="text" name="year" value={formData.year} onChange={handleInputChange} />
      <br />
      {/* Input field for movie actors (comma-separated string) */}
      <label className='text-lg font-semibold mr-2'>Actors:</label>
      <input type="text" name="actors" value={formData.actors.join(', ')} onChange={handleInputChange} />
      <br />
      {/* Save and Cancel buttons */}
      <button onClick={handleSave} className='bg-green-500 p-1 rounded-lg text-white mr-2 mt-3'>Save</button>
      <button onClick={onCancel} className='bg-red-500 p-1 rounded-lg text-white'>Cancel</button>
    </div>
  );
};

// Exporting the MovieForm component for external use
export default MovieForm;
