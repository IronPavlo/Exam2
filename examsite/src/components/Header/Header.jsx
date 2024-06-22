import Navbar from "../Navbar/Navbar"
import "./Header.css"


function Header(props) {

    

    return (
      <>
        <header>
            <div className="logo"><img src="/src/assets/ICLeather.svg" alt="" /> <h1>Leather Goods</h1></div>
            <Navbar editPossible={props.editPossible}/>
        </header>



      </>
    )
  }
  
  export default Header