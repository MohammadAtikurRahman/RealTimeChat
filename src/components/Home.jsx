
import '../App.css'
import { Link } from 'react-router-dom';
import React from "react";

import Button from 'react-bootstrap/Button';




 function Home() {
  return (
    <div className="App">
       

              <h2>Welcome dotNetChat</h2>
            
               <div  style={{ display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',}}>
                     <Link to="/signup" className="btn btn-primary m-3">Sign Up</Link>
             
             
                     <Link to="/signin" className="btn btn-danger m-3 ">Sign In</Link>


               </div>
             

                            

                
            
    </div>
  )
}

export default Home;
