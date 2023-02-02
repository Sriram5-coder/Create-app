import logo from './logo.svg';
import './App.css';
import Sample from './sample'
import Fsd from './class'
import Fsdss from './hh'
import Jsx from './jsx'
import For from './Form'
import './dummy.css'
import React, {useState,useEffect} from 'react'
import SetState from './setState';
import Hello from './imp_fun.js';
import Func from './funCount';
import Logg from './logged';
import Mapp from './map';
import {Routes,Route,Link} from 'react-router-dom';
import Navbar from './Form/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import GetData from './Components/getData';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Add from './Form/add'
import Deatils from './Form/details';
import Edit from './Form/edit';
import { useNavigate } from 'react-router-dom';
// import { Form, Button } from 'react-bootstrap';
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        {/* <Sample/>
        <Jsx/>
        
            <button onClick={() => setCount(
              count+1
            )}>
             Go Premium
            </button> */}
            {/* <Sample student="sriram" roll="1205" clg="acet" branch="IT"/>
            <SetState/>
            <Hello/>
            <Func/> */}
            {/* <Logg/> */}
            {/* <Mapp/> */}
            <Navbar/>
            {/* <Home/> */}
            {/* <GetData/> */}
            {/* <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes> */}
            {/* <Add/> */}
            <Routes>
                <Route path="/" element={<Add/>}/>
                <Route path="/details" element={<Deatils/>}/>
                <Route path="/edit/:pid" element={<Edit/>}/>
            </Routes> 
            

      </header>
    </div>
  );
}

export default App;

