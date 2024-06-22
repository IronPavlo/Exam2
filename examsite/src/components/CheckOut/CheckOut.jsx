import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';



function CheckOut(props) {
    
    const cartContent=props.cart;



  return (
    <>
      <button onClick={()=>{
        for (let i = 0; i < cartContent.length; i++) {
          const product = cartContent[i];
          
        }
      }}>Checkout</button>
    </>
      
  )
}

export default CheckOut




