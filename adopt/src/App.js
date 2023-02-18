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
import RescuePets from './Components/RescuePets';
import MyPetList from './Components/MyPetList';
import { LoginContext } from './Helper/Context';



function App() {

  const [petData, setPetData] = useState([]);
  const [errors, setErrors] = useState([]);
  const [currentUser, setCurrentUser] = useState('');
  const [rescueData, setRescueData] = useState([]);



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
    fetch(`http://localhost:3000/api/pets/not/adopted`, {
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
    <LoginContext.Provider value={{currentUser, setCurrentUser}}>
    <Router>
      <NavBar />
      <NavBar2 />
      <Routes>
       <Route path="/login" element={<Login loginUser={loginUser} loadPets={loadPets}/>} />
       <Route path="/signup" element={<Signup loginUser={loginUser}/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/profile" element={<Profile setCurrentUser={setCurrentUser} deleteProfile={deleteProfile} currentUser={currentUser} updateProfile={updateProfile}/>} />
        <Route path="/pets"  element= {<PetList currentUser={currentUser} petData={petData} loadPets={loadPets}/>} />   
        <Route path='/rescues'  element= {<RescueList loadRescues={loadRescues} rescueData={rescueData} />} />
        <Route path='/rescues/:id/pets'  element= {<RescuePets  currentUser={currentUser}  petData={petData} loadPets={loadPets}/>} />
        <Route path='/summaries/:id'  element= {<SummaryList petData={petData} currentUser={currentUser} loadPets={loadPets}/>} />
        <Route path='/mypets'  element= {<MyPetList currentUser={currentUser} loadPets={loadPets} petData={petData} />} />
      </Routes>
    </Router>
    </LoginContext.Provider>
  );
}




export default App;
