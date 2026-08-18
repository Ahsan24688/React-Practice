import React from 'react'
import { useState, useEffect, createContext } from 'react'

export const CartContext = createContext()

const ContextProvider = ({children}) => {

    let [cart, setCart] = useState(()=>{
        let cart = localStorage.getItem("cart");
        return cart ? JSON.parse(cart) : [];
    });

    useEffect(() =>{
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    let addToCart = (item) => {
      let itemindex = cart.find((item)=> item.id === id);
      if(itemindex){
        setCart(
          cart.map((item) => item.id ===id ? {...item, quantity: item.quantity + 1} : item)
        )
      }
    }

  return (
    <div>
      
    </div>
  )
}

export default Context
