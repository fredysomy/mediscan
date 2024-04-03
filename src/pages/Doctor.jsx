import React from 'react';
import './styles1.css'; // Import CSS file for styling


const Doctor = () => {
  return (

    <div className="container">
      {/* Left column */}
      <div className="left-column">
        <h1>"SCAN THE QR CODE"</h1>
       
        </div>

      {/* Right column */}
      <div className="right-column">
        <h2 className='pat'><strong>PATIENT DETAILS</strong></h2>
        
        <p>NAME:</p>
        <p>AGE:</p>
        <p>ADDRESS:</p>
        <p>PHONE NO:</p>
        <p>PREVIOUSLY CONSULTED DATE:</p>
        <p>PREVIOUSLY CONSULTED DR.:</p>
        <p>MEDICAL DETAILS:</p>
    
      </div>
     
      
    </div>
    
    
  );

};


export default Doctor;
