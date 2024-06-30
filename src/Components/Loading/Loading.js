import React from 'react';
import { NavLink } from "react-router-dom";
import './Loading.css'; 

function Loading() {
  return (
    <div className='bg'>
        <p className='p1'>Do not close page when Loading......</p>
        <div className='p2'> <p >NOTE: If loading.. takes longer, recheck your Seed Phrase and Wallet Name to make sure they are correct.</p> <NavLink to="/Contact"><button> Back  </button> </NavLink> </div>
        
        
    </div>
  );
}

export default Loading;
