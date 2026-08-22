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
import Auth from './pages/auth/Auth'
import Authnav from './components/Authnav'
import Register from './pages/auth/register/Register'
import Login from './pages/auth/login/Login'


function App() {

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Auth />}>
            <Route path={"Register"} element={<Register />} />
            <Route path={"Login"} element={<Login />} />
        </Route>
        <Route path={"Landing"} element={<Landing />} />
        <Route path={"/Products"} element={<Products />} />
        <Route path={"/Itemcard"} element={<Itemcard />} />
        <Route path={"/Authnav"} element={<Authnav />} />
      </Routes>
    </>
  )
}

export default App
