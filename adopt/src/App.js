import './App.css';
import axios from "axios";
import HomePage from "./Components/HomePage"
import NavBar from './Components/NavBar';
import NavBar2 from './Components/NavBar2';
import StyleSheet from './Components/StyleSheet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <NavBar/>
      <NavBar2/>
      <Routes>
        <Route path="/" element={<HomePage/>} />   
      </Routes>
    </Router>
  );
}

export default App;
