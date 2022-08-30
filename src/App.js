
import './App.css';
import Signin from './components/Signin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Home from './components/Home'
import Profile from './components/Profile'
import Navigationbar from './components/Navigationbar';
function App() {
  return (
    <div className="App">

        <Navigationbar /> 
      
      <header className="App-header">
          <BrowserRouter>
              <Routes>
              
                 
                   <Route path="signin" element={<Signin />} />
                   <Route path="signup" element={<Signup />} />
                     <Route path="profile" element={<Profile />} />
                   <Route path="/" element={<Home />} />
              </Routes>
            </BrowserRouter>

      </header>
       


    </div>

  );
}

export default App;
