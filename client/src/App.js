import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home  from "./Components/Home";
import Headers from './Components/Headers';
import Login from './Components/Login';
import Dashboard from './Components/DashBoard';

import './App.css';

function App() {
  return (
    <> 
     <Headers/>
     <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/login' element={<Login/>} />
     <Route path='/dashboard' element={<Dashboard/>} />
     </Routes>
    </>
  );
}

export default App;
