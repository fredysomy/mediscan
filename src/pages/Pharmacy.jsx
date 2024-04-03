import React from 'react';
import './styles.css'; // Import your CSS file for styling
import backgroundImage from './images.jpeg';

const Pharmacy = () => {
  return (
    <>
    <div className="container"  >
      <div className="left-column">
        
        <h2>Left Column</h2>
        <p>This is the content of the left column.</p>
      </div>
      <div className="right-column"  >
        
        <h2 className='curr'><u>CURRENT PRESCRIPTION</u></h2>
        <br/>
        <p>medicine name:</p>
        <p>dosage:</p>
        <p>usage period:</p>
        <br/>
        <br/>
        <h2 className='curr'><u>PREVIOUS PRESCRIPTION</u></h2>
        <br/>
        <p>medicine name:</p>
        <p>dosage:</p>
        <p>usage period:</p>
      </div>
      
    </div>
    
    
</>
   
  );
}

export default Pharmacy;
