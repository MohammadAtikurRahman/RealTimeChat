
import '../App.css'
import { Link } from 'react-router-dom';
import React from "react";




  

 function Home() {
  return (
   
    <div>
    
        <div className="App">
            
                    <h2>Welcome dotNetChat</h2>
                    
                    <div  style={{ display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',}}>
                            <Link to="/signup" className="btn btn-primary m-3">Sign Up</Link>
                    
                    
                            <Link to="/signin" className="btn btn-danger m-3 ">Sign In</Link>


                    </div>
                    

                                    

                        
                    
            </div>

    </div>
   
  )
}

export default Home;
