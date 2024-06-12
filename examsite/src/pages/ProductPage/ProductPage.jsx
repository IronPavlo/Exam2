import { useState,useEffect } from 'react'
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';

function ProductPage(props) {

const[product,setProductData]=useState(null)
console.log(product)
const { itemID } = useParams();
    useEffect(()=>{
        fetchData()
 
    },[])

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
    

    </>
  )
}

export default ProductPage