import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import "./AddToCartButton.css";


function AddToCartButton(props) {
    const[selectedQuantity,setQuantity] = useState(0);

    const addedProduct=props.product;
    let productPackage={
      id:addedProduct._id,
      name:addedProduct.name,
      price:addedProduct.price,
      size:props.selectedSize,
      quantity:selectedQuantity
    }
    useEffect(()=>{
    },[selectedQuantity])

    const maxQuantity=props.stock
    
    const handleSubmit = (e) => {
  
      e.preventDefault();
          let storage=localStorage.getItem("cart");
          if(storage===null && selectedQuantity!=0){
            const toCart=[productPackage]
            localStorage.setItem("cart",JSON.stringify(toCart));

          }else if(storage!==null && selectedQuantity!=0 ){

            const toCart=JSON.parse(localStorage.getItem("cart"))

            if(toCart.some(cartItem=>cartItem.id === productPackage.id && cartItem.size === productPackage.size && cartItem.quantity+productPackage.quantity <= maxQuantity)){
              let sameProd=toCart.find((cartItem)=>{
                return (productPackage.id==cartItem.id && cartItem.size === productPackage.size);
              })
         
              productPackage.quantity=String(Number(selectedQuantity)+Number(sameProd.quantity))
              let sameProdIndex=toCart.indexOf(sameProd);
              toCart.splice(sameProdIndex,1);
              localStorage.setItem("cart",JSON.stringify([...toCart,productPackage]));
            }else if(toCart.some(cartItem=>cartItem.id === productPackage.id && cartItem.size === productPackage.size && cartItem.quantity+productPackage.quantity > maxQuantity)){
              alert("There isn't enough stock left, check your cart")
            }else{localStorage.setItem("cart",JSON.stringify([...toCart,productPackage]));}
            
          }    
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="quantity">Quantity: </label>
        <input type="number" name="quantity" id="quantity" min={0} max={maxQuantity} value={selectedQuantity} onChange={(e)=>{
              setQuantity(e.target.value)
          }}/>
          <input type='button' name='mobileQuantityPlusButton' id='mobileQuantityPlusButton' className='mobileQuantity' value={"+"} onClick={()=>{
            if(selectedQuantity+1<=maxQuantity){
              setQuantity(Number(selectedQuantity)+1)
            }
            
          }}/>
          <input type='button' name='mobileQuantityMinusButton' id='mobileQuantityMinusButton' className='mobileQuantity' value={"-"} onClick={()=>{
            if(selectedQuantity-1>=0){
              setQuantity(Number(selectedQuantity)-1)
            }
            
          }} />
        <br />

        <input type='submit' name='addToCart' id='addToCart' value={"Add To Cart"}/>
        

      </form>
    </>
  )
}

export default AddToCartButton




