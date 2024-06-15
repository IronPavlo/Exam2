import Navbar from "../Navbar/Navbar"
import "./Header.css"


function Header() {


    

    return (
      <>
        <header>
            <div className="logo"><img src="/src/assets/ICLeather.svg" alt="" /> <h1>Leather Goods</h1></div>
            <Navbar/>
        </header>



      </>
    )
  }
  
  export default Header