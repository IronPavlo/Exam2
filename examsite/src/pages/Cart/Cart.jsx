import { useState,useEffect } from 'react'
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';
import "./Cart.css"

function Cart(props) {


const cartStorage = localStorage.getItem("cart")
const cartParsed = JSON.parse(cartStorage)
console.log(cartParsed)


  return (
    <>
    <Header/>
    <div className='cartWrapper'>
      <div className='cartContentWrapper'>
          <div className='cartItem'>
            <div className='cartItemExtra'>
              <div className='cartItemImageWrapper'>Cart</div>
              <div className='cartItemDetails'>Contents</div>
            </div>
            <div className='cartItemPrice'>Price</div>
          </div>

        {cartParsed.map((product,index)=>{
          return  <div key={index} className='cartItem'>
                    <div className='cartItemImageWrapper'>imgplaceholder</div>
                    <div className='cartItemDetails'>
                      <h3>{product.name}</h3>
                      <h5>Size: {product.size.toUpperCase()}</h5>
                    </div>
                    <div className='cartItemQuantity'>
                      x{product.quantity}
                    </div>
                    <div className='cartItemPrice'>
                    € {product.price * product.quantity}
                    </div>
                  </div>
        })}
      </div>
    </div> 
    </>
  )
}

export default Cart