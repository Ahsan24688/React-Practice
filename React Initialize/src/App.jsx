import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Nav from './components/Nav.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'
import img from "./assets/1.jpeg"
import userdata from "./data/user.js"

function App() {
  

  return (
    <>
      <Nav />
      <div className="content">
        <div className="content-text">
          <h1 className="hero-headng"> website Content </h1>
          <p className="content-p"> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, voluptatum. </p>
        </div>
        <div className="content-img">
          <img src={img} className="content-img" alt="" />
        </div>
      </div>
      <div className="card">
        {userdata.map((data, index) => (
          <div key={index}>
            <Card title={data.title} description={data.description} image={data.image} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default App
