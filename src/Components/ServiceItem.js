import React, { useState } from 'react';

const ServiceItem = ({ service, updateService, deleteService }) => {
  const [edit, setedit] = useState(false);
  const [name, setName] = useState(service.name);
  const [description, setDescription] = useState(service.description);
  const [price, setPrice] = useState(service.price);

  const handleUpdate = () => {
    updateService({ ...service, name, description, price });
    setedit(false);
  };

  return (
    <div>
      {edit ? (
        <div >
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <input value={description} onChange={(e) => setDescription(e.target.value)} />
          <input value={price} onChange={(e) => setPrice(e.target.value)} />
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div className='container'>
          <div className='row'>
          <div className='col-4'>

            <div class="card" style={{border:'1px solid black'}}>
  <div class="card-body">
    <h2 class="card-title">Service Name: {service.name}</h2>
    <p class="card-text"> Description: {service.description}</p>
    <h3 class="card-subtitle mb-2 text-muted"> Price:₹{service.price}</h3>

    <button style={{backgroundColor:'green',borderRadius:'10%',color:'white'}} onClick={() => setedit(!edit)}>Edit</button>
      <button style={{backgroundColor:'red',borderRadius:'10%',color:'white'}} onClick={() => deleteService(service.id)}>Delete</button>
  </div>
</div>
         </div>
        </div>
        </div>
      )}
     
    </div>
  );
};

export default ServiceItem;
