import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';

function AddToCartButton(props) {

    const addedProduct=props.product;
    const productPackage={
      name:addedProduct.name,
      price:addedProduct.price,
      size:props.selectedSize,
      quantity:props.quantity
    }


  return (
    <>
      <button onClick={()=>{
          let storage=localStorage.getItem("cart");
          if(storage===null){
            const toCart=[productPackage]
            localStorage.setItem("cart",JSON.stringify(toCart));
          }else{
            const toCart=JSON.parse(localStorage.getItem("cart"))
            localStorage.setItem("cart",JSON.stringify([...toCart,productPackage]));
          }
      }}>Add To Cart</button>
    </>
  )
}

export default AddToCartButton