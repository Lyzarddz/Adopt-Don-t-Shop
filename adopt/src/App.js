import './App.css';
import HomePage from "./Components/HomePage"
import NavBar from './Components/NavBar';
import NavBar2 from './Components/NavBar2';
import StyleSheet from './Components/StyleSheet';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PetList from './Components/PetList';
import RescueList from './Components/RescueList';
import SummaryList from './Components/SummaryList';
import Profile from './Components/Profile';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { useParams } from 'react-router-dom';
import RescuePets from './Components/RescuePets';



function App() {

  const [petData, setPetData] = useState([]);
  const [errors, setErrors] = useState([]);
  const [currentUser, setCurrentUser] = useState('');
  const [rescueData, setRescueData] = useState([]);
  const [summaryData, setSummaryData] = useState([]);
  const {id}= useParams();

  useEffect(() => {
    // auto-login
    fetch('http://localhost:3000/api/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);


  function loginUser (user) {
    setCurrentUser(user); 
  }



  function loadPets() {
 
    fetch(`http://localhost:3000/api/pets/`, {
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
      }
    })
    }


  function loadSummaries() {
 
    fetch(`http://localhost:3000/api/pet/summaries/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(res => {
      if(res.ok){
          res.json().then(pets => {
              setSummaryData(pets)
          })
      } else {
        res.json().then(json => setErrors(json.errors))
      }
    })
    }

    console.log(summaryData)
    console.log(petData)


    function loadRescues() {

      fetch(`http://localhost:3000/api/rescues/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json", 
        },
      })
      .then(res => {
        if(res.ok){
            res.json().then(rescues => {
                setRescueData(rescues)
            })
        }else {
          console.log(res)
          res.json().then(json => setErrors(json.errors))
        }
      })
      }


      function updateProfile(updatedProfile){
        setCurrentUser(current => {
         
          console.log(current)
          console.log(current.typeOf)
         return  Object.keys(current).map(profile => {
           if (profile.id === updatedProfile.id) {
             return updatedProfile
           } else {
               return profile
             }
       })
     })
   }

   const deleteProfile = (id) => {setCurrentUser(current => Object.keys(current).filter(p => p.id !== id))}
    


  return (
    <Router>
      <NavBar currentUser={currentUser}  setCurrentUser={setCurrentUser}/>
      <NavBar2 currentUser={currentUser}  setCurrentUser={setCurrentUser}/>
      <Routes>
       <Route path="/login" element={<Login loginUser={loginUser} loadPets={loadPets}/>} />
       <Route path="/signup" element={<Signup loginUser={loginUser}/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/profile" element={<Profile deleteProfile={deleteProfile} currentUser={currentUser} updateProfile={updateProfile}/>} />
        <Route path="/pets"  element= {<PetList  currentUser={currentUser} petData={petData} loadPets={loadPets}/>} />   
        <Route path='/rescues'  element= {<RescueList loadRescues={loadRescues} rescueData={rescueData} />} />
        <Route path='/rescues/:id/pets'  element= {<RescuePets  currentUser={currentUser}  petData={petData} loadPets={loadPets}/>} />
        <Route path='/summaries/:id'  element= {<SummaryList petData={petData} loadSummaries={loadSummaries} summaryData={summaryData} loadPets={loadPets}/>} />
      </Routes>
    </Router>
  );
}

export default App;
