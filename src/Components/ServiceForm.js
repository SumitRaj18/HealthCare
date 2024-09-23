// ServiceForm.js
import React, { useState } from 'react';

const ServiceForm = ({ addService }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !price) {
      alert("All fields are required");
      return;
    }
    addService({
      id: Date.now(),
      name,
      description,
      price
    });
    setName('');
    setDescription('');
    setPrice('');
  };

  return ( 
    <div style={{marginTop:'50px'}}>
   
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Service Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button style={{backgroundColor:'blue',color:'white',borderRadius:'10%'}} type="submit">Add Service</button>
    </form>
    </div>
  );
};

export default ServiceForm;
