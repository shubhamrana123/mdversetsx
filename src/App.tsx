import React from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import Home from './screens/Home';
// import { Route,Routes } from 'react-router-dom';
import PatientExamination from './screens/PatientExamination';

function App() {
  return (
  <>
  <Navbar></Navbar>
  <PatientExamination></PatientExamination>
  {/* <Home></Home> */}
  {/* <Routes>
          <Route path="/" element={<Login  />} />
          <Route path="/details" element={<PatientExamination />} />
        
      
        </Routes> */}
  </>
  );
}

export default App;
