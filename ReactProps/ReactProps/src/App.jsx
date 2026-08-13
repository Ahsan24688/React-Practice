import { useState } from 'react'
import './App.css'
import Props from './propscom/props'
import userdata from './propscom/data/data.js'

function App() {
  

  return (
    <>

    <div className="card">
      {
        userdata.map((data, index)=>(
          <div key={index}>
              <Props name={data.Name} age={data.Age} email={data.Email}/>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default App
