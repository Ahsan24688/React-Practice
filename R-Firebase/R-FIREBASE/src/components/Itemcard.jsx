import React from 'react'

const Itemcard = (props) => {
  return (
    <div className='flex flex-col gap-2 m-2 p-2 rounded-2xl bg-indigo-300'>
      <img src={props.imageurl} alt="img" className=' h-48 object-contain rounded-xl cursor-pointer w-48 p-2' />
      <h1>Title: {props.producttitle}</h1>
      <p>Desc: {props.Description}</p>
      <p>Price: {props.Price}</p>
    </div>
  )
}

export default Itemcard
