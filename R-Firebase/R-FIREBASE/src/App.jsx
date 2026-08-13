import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route } from 'react-router'
import Landing from './pages/Landing'
import Products from './pages/Products'
import Navbar from './components/Navbar'
import Itemcard from './components/Itemcard'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path={"/Products"} element={<Products />} />
        <Route path={"/Itemcard"} element={<Itemcard />} />
      </Routes>
    </>
  )
}

export default App
