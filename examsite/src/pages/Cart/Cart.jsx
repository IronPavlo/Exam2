import { useState,useEffect } from 'react'
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';
import "./Cart.css"

function Cart(props) {

const[cartSize,cartSizeSet]=useState(0)

const cartStorage = localStorage.getItem("cart")
const cartParsed = JSON.parse(cartStorage)
console.log(cartParsed)
useEffect(()=>{},[cartSize])

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
            <div className='cartContentTopPrice'>Price</div>
            
          </div>

        {cartParsed.map((product,index)=>{

          return  <div key={index} className='cartItem' id={`${product.id}${product.quantity}${product.size}`}>
                    <div className='cartItemImageWrapper'>imgplaceholder</div>
                    <div className='cartItemDetails'>
                      <h3>{product.name}</h3>
                      <h5>Size: {product.size.toUpperCase()}</h5>
                    </div>
                    <div className='cartItemQuantity'>
                      x{product.quantity}
                    </div>
                    <div className='cartItemPrice'>
                    €{Number(product.price) * Number(product.quantity)}
                    </div>
                    <div>
                      <button className='removeFromCart' onClick={()=>{
                        let cartItem=document.getElementById(`${product.id}${product.quantity}${product.size}`);
                        console.log(cartItem)
                        console.log(index)
                        cartParsed.splice(index,1)
                        console.log(cartParsed)
                        localStorage.setItem("cart",JSON.stringify(cartParsed))
                        cartSizeSet(cartParsed.length)
                      }}>X</button>
                    </div>
                  </div>
                  
        })}
      </div>
    </div> 
    </>
  )
}

export default Cart