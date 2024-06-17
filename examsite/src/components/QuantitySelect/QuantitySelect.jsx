import { useState,useEffect } from 'react'


function QuantitySelect(props) {
    let productPackage=props.productPackage
    const maxQuantity=props.stock
    const[selectedQuantity,setQuantity] = useState(0);
    useEffect(()=>{

    },[selectedQuantity])
  
  
  return (
    <>
        <input type="number" name="quantity" id="quantity" min={0} max={maxQuantity} onChange={(e)=>{
            setQuantity(e.target.value)
        }}/>
  
    </>
  )
  }


  export default QuantitySelect