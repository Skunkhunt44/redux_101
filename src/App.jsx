import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {


 

  return (
    <>
    <div className='container-fuild'>
      
      <Navbar/>
      <Outlet/>     
    </div>
    </>
  )
}

export default App
