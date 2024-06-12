import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {


    

    return (
      <>
        <ul className="navbar">
            <div>
              <Link to={"/"}><li>Home</li></Link>
              <Link to={"/shop"}><li>Shop</li></Link>
            </div>
            <div>
              <Link to={"/cart"} className="cart"><li>Cart</li></Link>
            </div>
        </ul>
        
      </>
    )
  }
  
  export default Navbar