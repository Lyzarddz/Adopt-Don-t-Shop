import './App.css';
import axios from "axios";
import HomePage from "./Components/HomePage"
import StyleSheet from './Components/StyleSheet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />   
      </Routes>
    </Router>
  );
}

export default App;
