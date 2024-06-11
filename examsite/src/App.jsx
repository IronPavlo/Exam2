import { useState } from 'react'
import {
  Route,Routes
} from "react-router-dom";
import './App.css'
import HomePage from './pages/HomePage/HomePage.jsx';

function App() {


  return (
    <>
    
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/shop"></Route>
        <Route path="/shop/:itemID"></Route>
        <Route path="/cart"></Route>

      </Routes>
    </>
  )
}

export default App
