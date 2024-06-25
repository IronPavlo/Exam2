import { useState,useEffect } from 'react'
import Header from '../../components/Header/Header';
import {Link, useParams } from 'react-router-dom';
import "./Cart.css"


function Cart(props) {

const[cartSize,cartSizeSet]=useState(0)
const[reRender,reRenderSet]=useState(false)
let cartStorage = localStorage.getItem("cart")
if (cartStorage===null) {
  cartStorage=localStorage.setItem("cart",JSON.stringify([]))
}

const cartParsed = JSON.parse(cartStorage)
console.log(cartParsed)
useEffect(()=>{

},[cartSize])


function CheckOut() {
    
  const cartContent=cartParsed;

return (
  <>
    <button onClick={()=>{
      for (let i = 0; i < cartContent.length; i++) {
        const product = cartContent[i];
        fetch(`http://localhost:8080/checkout/${product.id}/${product.size}/${product.quantity}`,{method:"PATCH"})
      }
      localStorage.setItem("cart",JSON.stringify([]))
      if(reRender){
        reRenderSet(false);
      }else{
        reRenderSet(true);
      }
    }}>Checkout</button>
  </>
    
)
}




  return (
    <>
    <Header/>
    <main>
      <section>
        <div className='cartWrapper'>
          <div className='cartContentWrapper'>
              <h2 className='cartItem'>
                
              Cart
                
              </h2>

            {cartParsed.map((product,index)=>{

              return  <div key={index} className='cartItem' id={`${product.id}${product.quantity}${product.size}`}>
                        <Link to={`/shop/${product.id}`}>
                        <div className='cartItemImageWrapper'><img src={product.imgURL} alt="" /></div>
                        <div className='cartItemDetails'>
                          <div><p>{product.name}</p></div>
                          
                          <p>Size: {product.size.toUpperCase()}</p>
                        </div>
                        </Link>
                        <div>
                          <div className='cartItemQuantity'>
                            Quantity:{`${product.quantity}`}
                          </div>
                          <div className='cartItemPrice'>
                          €{Number(product.price) * Number(product.quantity)}
                          </div>
                        </div>
                        <div className='removeItem'>
                          Remove Item
                          <button className='removeFromCart' onClick={()=>{
                  
                            cartParsed.splice(index,1)
                            localStorage.setItem("cart",JSON.stringify(cartParsed))
                            cartSizeSet(cartParsed.length)
                            if(reRender){
                              reRenderSet(false);
                            }else{
                              reRenderSet(true);
                            }
                            
                          }}>X</button>
                        </div>
                      </div>
                      
            })}

            {cartParsed.map((value,index)=>{
                if(index==cartParsed.length-1 && cartParsed.length>0){
                  console.log("a")

                  return (<CheckOut key={index}/>)
                }
            })}
            
          </div>
        </div>
      </section> 
    </main>
    </>
  )
}

export default Cart