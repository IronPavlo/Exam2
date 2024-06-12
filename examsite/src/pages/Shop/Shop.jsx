import { useEffect, useRef, useState } from 'react'
import Header from '../../components/Header/Header'
import "./Shop.css"
import ProductCard from '../../components/ProductCard/ProductCard'

function Shop() {

const [products,setProductsData] = useState([])

const productData=useRef(0)
    
    useEffect(()=>{
        fetchData()
        productData.current=productData.current+1;
 
    },[])

    const fetchData=async()=>{
        try {
            const response = await fetch("http://localhost:8080/products");
            const result = await response.json();
            setProductsData(result);
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }



  return (
    <>
    <Header/>
    <section className='shopTop'>
        <div>Shop</div>
    </section>
    <br />
    <section className='shopActual'>
        <div className='shopWrapper'>
            <div className='filterWrapper'>
                ph
            </div>
            <br />
            <div className='shopGrid'>
                {products.map((product,index)=>{
                    return <ProductCard key={index} product={product}/>
                })}
                
                
            </div>

        </div>
    </section>

    </>
  )
}

export default Shop