import { useState,useEffect } from 'react'
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';

function Cart(props) {


const cartStorage = localStorage.getItem("cart")
const cartParsed = JSON.parse(cartStorage)
console.log(cartParsed)


  return (
    <>
    <Header/>
    

    </>
  )
}

export default Cart