import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import "./CheckOut.css"


function CheckOut(props) {
    
    const cartContent=props.cart;



  return (
    <>
      <button className='checkout' onClick={()=>{
        for (let i = 0; i < cartContent.length; i++) {
          const product = cartContent[i];
          fetch(`http://localhost:8080/checkout/${product.id}/${product.size}/${product.quantity}`,{method:"PATCH"})
        }
        localStorage.setItem("cart",JSON.stringify([]))
       
      }}>Checkout</button>
    </>
      
  )
}

export default CheckOut




