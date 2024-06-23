import { Link } from "react-router-dom";
import "./Navbar.css"
import { useState } from "react";

function Navbar(props) {
  let cartSize="";
  const cart=JSON.parse(localStorage.getItem('cart'))
  const[updateRenderAmount,setUpdate]=useState(0)
    setTimeout(()=>{
        setUpdate(updateRenderAmount+1)
    },3000)
  

    if(cart!=null && cart.length!=0){
      cartSize=String(cart.length)
    }
    return (
      <>
        <ul className="navbar" >
            <div>
              <Link to={"/"}><span>Home</span></Link>
              <Link to={"/shop"}><span>Shop</span></Link>
              <Link to={"/sell"}><span>Sell</span></Link>
              
            </div>
            <div>
              <Link to={"/cart"} className="cart"><span>{cartSize} Cart</span></Link>
            </div>
        </ul>
        
      </>
    )
  }
  
  export default Navbar