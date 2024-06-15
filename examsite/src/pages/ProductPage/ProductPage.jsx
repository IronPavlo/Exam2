import { useState,useEffect } from 'react'
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';

function ProductPage(props) {

const[product,setProductData]=useState([{sizes:[],stock:{XS:0,S:0,M:0,L:0,XL:0}}])
const [selectorValue,setSelectorValue]=useState(product[0].stock.XS)
const [selectedSize,setSelectedSize]=useState("sizeSelect")
console.log(product)
const { itemID } = useParams();
    useEffect(()=>{
        fetchData()
 
    },[])
    useEffect(()=>{
 
    },[selectedSize,selectorValue])

const SizeSelect = ()=>{
    return (
            <>
                <div id='stock'>Stock: {selectorValue} items</div>
                <select name="sizes" id={`${itemID}SizeSelect`} value={selectedSize} onChange={()=>{
                    const selectorValue2=document.getElementById(`${itemID}SizeSelect`).value
                        switch (selectorValue2) {
                            case "xs":
                                setSelectorValue(product[0].stock.XS) 
                                setSelectedSize(selectorValue2)           
                                break;
                            case "s":
                                setSelectorValue(product[0].stock.S) 
                                setSelectedSize(selectorValue2)         
                                break;
                            case "m":
                                setSelectorValue(product[0].stock.M)
                                setSelectedSize(selectorValue2)          
                                break;
                            case "l":
                                setSelectorValue(product[0].stock.L)
                                setSelectedSize(selectorValue2)   
                                break;
                            case "xl":
                                setSelectorValue(product[0].stock.XL)
                                setSelectedSize(selectorValue2) 
                                break;
                            default:
                                break;
                        }  
                         
                    }}>
                        <option value={"sizeSelect"}>Select Size</option>
                { product[0].sizes.map((size,index)=>{
                    return <option key={index} value={size.toLowerCase()}>{size}</option>
                })}  
                </select>
            </>
    )
}

    const fetchData=async()=>{
        try {
            const response = await fetch(`http://localhost:8080/products/${itemID}`);
            const result = await response.json();
            setProductData(result);
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }


  return (
    <>
    <Header/>
    <div className='productWrapper'>
        <div className='productImageWrapper'>productImagePlaceHolder</div>
        <div className='productDetailsWrapper'>
            <h2 className='productName'>{product[0].name}</h2>
            <h3 className='productPrice'>€{product[0].price}</h3>
            <SizeSelect/>

        </div>
    </div>

    </>
  )
}

export default ProductPage