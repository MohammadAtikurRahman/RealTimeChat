
import './App.css';
import Signin from './components/Signin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
function App() {
  return (
    <div className="App">


      
      <header className="App-header">
          <BrowserRouter>
              <Routes>
              
                 
                   <Route path="Signinpage" element={<Signin />} />
                   <Route path="Signuppage" element={<Signup />} />
               
              </Routes>
            </BrowserRouter>

      </header>
       


    </div>

  );
}

export default App;
