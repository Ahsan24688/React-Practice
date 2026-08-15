import React from 'react'

const Itemcard = (props) => {
  return (
    <div className='flex flex-col gap-2 m-2 p-4 rounded-2xl bg-indigo-300 w-72 shadow-md'>
      <div className='w-full h-48 bg-indigo-200 overflow-hidden rounded-xl flex items-center justify-center p-4'>
      <img src={props.imageurl} alt="img" className='w-full h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300' />
      </div>
      <h1>Title: {props.producttitle}</h1>
      <p>Desc: {props.Description}</p>
      <p>Price: {props.Price}</p>
    </div>
  )
}

export default Itemcard
