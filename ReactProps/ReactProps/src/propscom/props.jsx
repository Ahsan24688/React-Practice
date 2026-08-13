import React from 'react'

export default function Props(props) {
  return (
    <>
    <div className="card">
        <div className="card-content">
            <h2> {props.name} </h2>
            <p> {props.age}</p>
            <p> {props.email}</p>
        </div>
    </div>
    </>
  )
}
