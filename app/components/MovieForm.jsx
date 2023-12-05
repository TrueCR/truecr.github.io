import React, { useState } from 'react';

const MovieForm = ({ onSave, onCancel, initialData }) => {
  const [formData, setFormData] = useState(initialData || { title: '', year: '', actors: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'actors') {
      const actorsArray = value.split(',').map((actor) => actor.trim());
      setFormData((prevData) => ({ ...prevData, [name]: actorsArray }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSave = () => {
    onSave(formData);
  };

  return (
    <div className='mx-5 my-2 p-2 bg-slate-200 rounded shadow'>
      <label className='text-lg font-semibold mr-7'>Title:</label>
      <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
      <br />
      <label className='text-lg font-semibold mr-7'>Year:</label>
      <input type="text" name="year" value={formData.year} onChange={handleInputChange} />
      <br />
      <label className='text-lg font-semibold mr-2'>Actors:</label>
      <input type="text" name="actors" value={formData.actors.join(', ')} onChange={handleInputChange} />
      <br />
      <button onClick={handleSave} className='bg-green-500 p-1 rounded-lg text-white mr-2 mt-3'>Save</button>
      <button onClick={onCancel} className='bg-red-500 p-1 rounded-lg text-white'>Cancel</button>
    </div>
  );
};

export default MovieForm;
