import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import "./HomePage.css"
import ProductCard from '../../components/ProductCard/ProductCard';

function HomePage() {

const [featuredProducts,setFeaturedProducts]=useState([]);

  const fetchData=async()=>{
    try {
        const response = await fetch(`http://localhost:8080/products/no/na?limit=2`);
        const result = await response.json();
        setFeaturedProducts(result)
        console.log(result)
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}
useEffect(()=>{fetchData()},[])





  return (
    <>
    <Header/>
    <main>
      <section>
      <h2>Some of Our Products</h2>
      <div className='exProd'>
          <div className='featProd'>
            {featuredProducts.map((product,index)=>{
              return <ProductCard key={index} product={product}/>
            })}
          </div>
      </div>
      </section>
      <section>
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam vulputate.
        At varius vel pharetra vel. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt.
        Tellus mauris a diam maecenas sed enim ut sem. Congue eu consequat ac felis donec. Mattis enim ut tellus 
        elementum sagittis vitae et leo. Adipiscing bibendum est ultricies integer quis auctor elit. Blandit turpis 
        cursus in hac. Ultricies mi eget mauris pharetra et. A arcu cursus vitae congue. Scelerisque fermentum dui 
        faucibus in ornare quam viverra orci.</p>
      </section>
      <section>
      <h2>Contacts</h2>
      <div>Email: Lorem.ipsum@dolor.sit</div>
      <div>Phone: +370 696 96942</div>
      </section>
    </main>
    </>
  )
}

export default HomePage