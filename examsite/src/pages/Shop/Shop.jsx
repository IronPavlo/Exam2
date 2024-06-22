import { useEffect, useRef, useState } from 'react'
import Header from '../../components/Header/Header'
import "./Shop.css"
import ProductCard from '../../components/ProductCard/ProductCard'

function Shop() {

const [products,setProductsData] = useState([]);
const [searchQuery,setSearchQuery]=useState("no/na")

const productData=useRef(0)
    
    useEffect(()=>{
        console.log("fetched")
        fetchData(searchQuery)
        productData.current=productData.current+1;
        
    },[searchQuery])
    

    const fetchData=async(query)=>{
        try {
            const response = await fetch(`http://localhost:8080/products/${query}`);
            const result = await response.json();
            setProductsData(result);
            console.log(result)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    function Filter() {

        const[q,setQ]=useState("")
      
        return (
          <>
          
            <div className="wrapper">
                  <div className="search-wrapper">
                      <label htmlFor="search-form">
                      <input
                        type="search"
                        name="search-form"
                        id="search-form"
                        className="search-input"
                        placeholder="Search for..."
                         value={q}
                        /*
                        // set the value of our useState q
                        //  anytime the user types in the search box
                        */
                       onChange={(e) => setQ(e.target.value)}
                      />
                      </label>
                      <button onClick={()=>{
                        if(q){
                            setSearchQuery(`yes/${q}`)
                            this.forceUpdate()
                            console.log(1)
                        }
                        setSearchQuery(`no/na`)
                      }}>Search</button>
                </div>
             </div>
      
          </>
        )
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
            <Filter/>
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


