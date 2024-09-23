import React, { useState } from 'react';
import ServiceForm from './Components/ServiceForm';
import ServiceList from './Components/ServiceList';
import img from './images/health.jpg';
import './App.css';

const App = () => {
  const [services,setServices] =useState([]);
  const addService=(service) => {
    setServices([...services,service]);
  };
  const updateService=(updatedService) => {
    setServices(services.map(service => (service.id ===updatedService.id ?updatedService : service)));
  };
  const deleteService=(id)=> {
    setServices(services.filter(service =>service.id !==id));
  };
  
   return (
    <div className="App">
      <nav style={{backgroundColor:'skyblue'}}>
      <div style={{display:'flex',marginLeft:'350px',textAlign:'center'}}>
     <img style={{height:'100px'}} src={img} alt="" />
      <h1 style={{color:'black',marginTop:'35px'}}>Healthcare Services Management</h1>
      </div>
      </nav>
      <ServiceForm addService={addService} />
      <ServiceList services={services} updateService={updateService} deleteService={deleteService}/>
    </div>
  );
};

export default App;
