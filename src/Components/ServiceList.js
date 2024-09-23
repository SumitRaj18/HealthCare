import React from 'react';
import ServiceItem from './ServiceItem';

const ServiceList = ({ services, updateService, deleteService }) => {
  return (
    <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',marginTop:'10px'}} >
      {services.length > 0 ? (
        services.map((service) => (
          <ServiceItem
            key={service.id}
            service={service}
            updateService={updateService}
            deleteService={deleteService}
          />
        ))
      ) : (
        <h1>No services available</h1>
      )}
    </div>
  );
};

export default ServiceList;
