import './App.css';
import axios from "axios";
import HomePage from "./Components/HomePage"
import NavBar from './Components/NavBar';
import NavBar2 from './Components/NavBar2';
import StyleSheet from './Components/StyleSheet';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PetList from './Components/PetList';
import RescueList from './Components/RescueList';



function App() {

  const [petData, setPetData] = useState([]);
  const [errors, setErrors] = useState([]);
  const [rescueData, setRescueData] = useState([]);

  function loadPets() {
 
    fetch(`http://localhost:3000/api/pets`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(res => {
      if(res.ok){
          res.json().then(pets => {
              setPetData(pets)
          })
      } else {
        res.json().then(json => setErrors(json.errors))
        console.log(errors)
      }
    })
    }

    console.log(petData)

    
    


  return (
    <Router>
      <NavBar/>
      <NavBar2/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/pets"  element= {<PetList  petData={petData} loadPets={loadPets}/>} />   
        <Route path='/rescues'  element= {<RescueList />} />
      </Routes>
    </Router>
  );
}

export default App;
