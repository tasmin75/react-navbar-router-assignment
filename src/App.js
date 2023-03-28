import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';
function App() {
  return (
   < Router>
    <Navbar/>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/login'element={<Login/>}/>
    </Routes>
   </Router>
  )
}

export default App
    