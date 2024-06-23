import { useState,useEffect } from 'react'
import Header from '../../components/Header/Header';
import { useParams,Link } from 'react-router-dom';
import AddToCartButton from '../../components/AddToCartButton/AddToCartButton';
import "./ProductPage.css"

function ProductPage(props) {

const[product,setProductData]=useState([{sizes:[],stock:{XS:0,S:0,M:0,L:0,XL:0}}])
const [selectorValue,setSelectorValue]=useState(product[0].stock.XS)
const [selectedSize,setSelectedSize]=useState("sizeSelect")
const { itemID } = useParams();
    useEffect(()=>{
        fetchData()
    },[])
    useEffect(()=>{
 
    },[selectedSize,selectorValue])

const SizeSelect = () => {
    return (
            <> 
                    <div id='stock'>Stock: {selectorValue} items</div>
                    <label htmlFor={`${itemID}SizeSelect`}>Sizes: </label>
                    <select name="sizes" id={`${itemID}SizeSelect`} value={selectedSize} onChange={(e)=>{
                        const selectorValue2=e.target.value
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
    <main>
        <section>
            <br />     
            <br /> 
            <div className='productWrapper'>
                <div className='productImageWrapper'><img src={product[0].imgURL} alt={`Picture of ${product[0].name}`} /></div>
                <div className='productDetailsWrapper'>
                    <h2 className='productName'>{product[0].name}</h2>
                    <h3 className='productPrice'>€{product[0].price}</h3>
                    <div className='selectProd'>
                    <SizeSelect/>
                    <AddToCartButton product={product[0]} selectedSize={selectedSize} stock={selectorValue}/>
                </div>  
                <br />
                    <div className='description'>
                        <p>{product[0].details}</p>
                    </div>
                    </div>
                    <Link to={`/edit/${itemID}`}><span>Edit</span></Link>
                
            </div>
        </section>
    </main>  
    </>
  )
}

export default ProductPage