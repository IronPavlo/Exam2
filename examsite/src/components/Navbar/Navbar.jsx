import { Link } from "react-router-dom";
import "./Navbar.css"
import { useState } from "react";

function Navbar() {
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
        <ul className="navbar">
            <div>
              <Link to={"/"}><li>Home</li></Link>
              <Link to={"/shop"}><li>Shop</li></Link>
            </div>
            <div>
              <Link to={"/cart"} className="cart"><li>{cartSize} Cart</li></Link>
            </div>
        </ul>
        
      </>
    )
  }
  
  export default Navbar