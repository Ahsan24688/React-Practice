import React from 'react'
import { useState } from 'react';
import { collection, addDoc, db, getDocs, doc, updateDoc, deleteDoc } from "../database/firebaseconfig";



const Itemcard = (props) => {

  return (
    <div className='flex flex-col gap-3 m-2 p-4 rounded-2xl bg-[#739BF8] w-72 shadow-md'>

      <div className='w-full h-48 bg-indigo-200 overflow-hidden rounded-xl flex items-center justify-center p-4'>
        <img src={props.imageurl} alt="img" className='w-full h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300' />
      </div>

      <div className='gap-1'>
        <h1>Title: {props.producttitle}</h1>
        <p>Desc: {props.Description}</p>
        <p>Price: {props.Price}</p>
      </div>

      <div className='flex justify-between items-center bg-amber-300 rounded-2xl p-2'>
        <botton className='bg-amber-200 p-2 rounded-2xl px-4'>Cart</botton>

        <div className='flex gap-2'>
          <button className='bg-amber-200 p-2 rounded-2xl px-4'
            onClick={() => props.onEdit(props.id)}>Edit</button>

          <button className='bg-amber-200 p-2 rounded-2xl px-4'
            onClick={() => props.deleteproduct(props.id)}>Delete</button>
        </div>

      </div>



    </div>
  )
}

export default Itemcard
