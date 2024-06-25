import { useState,useEffect } from 'react'
import Header from '../../components/Header/Header';
import "./SellProduct.css"

function SellProduct(props) {



  if(localStorage.getItem("currentProd")==null){
    localStorage.setItem("currentProd",JSON.stringify({
    name:'',
    sizes:[],
    price:'',
    stock:{XS:0,S:0,M:0,L:0,XL:0},
    imgURL:""
  }))
  }
  const[productStored,setProductStorage]=useState(JSON.parse(localStorage.getItem("currentProd")))
  const[product,setProductData]=useState({
    name:'',
    sizes:[],
    price:'',
    stock:{XS:0,S:0,M:0,L:0,XL:0},
    imgURL:"",
    details:""
  }
  )
  const fetchData=async()=>{
    try {
   
        let response = await fetch(`http://localhost:8080/sell`,{method:"POST",body:JSON.stringify(productStored),headers: {
          "Content-type": "application/json; charset=UTF-8",
        },});
        return response.json()
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}

  // product template
    // {
    //   name:,
    //   sizes:[],
    //   price:,
    //   stock:{XS:0,S:0,M:0,L:0,XL:0}
    
    // }
    

  return (
    <>
    <Header/>
    <main>
      <section>
        <h1>Sell Product</h1>
      <div className='formWrapper'>
        <form onSubmit={(e)=>{
            e.preventDefault()
            const sizeArray=[
              document.getElementById('xsSizeOption'),
              document.getElementById('sSizeOption'),
              document.getElementById('mSizeOption'),
              document.getElementById('lSizeOption'),
              document.getElementById('xlSizeOption')
            ]
              if(((sizeArray[0].checked && productStored.stock.XS>0) || 
              (sizeArray[1].checked && productStored.stock.S>0) || 
              (sizeArray[2].checked  && productStored.stock.M>0) || 
              (sizeArray[3].checked && productStored.stock.L>0) || 
              (sizeArray[4].checked && productStored.stock.XL>0)) && productStored.name!=""){
                
                fetchData();
                localStorage.setItem("currentProd",JSON.stringify({
                    name:"",
                    sizes:[],
                    price:"",
                    stock:{XS:0,S:0,M:0,L:0,XL:0},
                    imgURL:""
                  }))
              setProductStorage(JSON.parse(localStorage.getItem("currentProd")))
              }
          
              
          
          }}>
          <label htmlFor="formProdName"> Product Name </label>
          <input type="text" name='formProdName' id='formProdName' defaultValue={productStored.name} onChange={()=>{
            productStored.name=document.getElementById('formProdName').value;
            localStorage.setItem("currentProd",JSON.stringify(productStored))
           
          }}/>
          <label htmlFor=""></label>
          <div>Sizes</div>
          <ul id='sizeOptions'>
            <label htmlFor="xsSizeOption">Extra Small {"(XS)"}</label>
            {[0].map((value,index)=>{
              if(productStored.sizes.includes("XS")){
                return <input key={index} type="checkbox" name="xsSizeOption" id="xsSizeOption" defaultChecked onChange={()=>{
                          if(productStored.sizes.includes("XS")){
                            productStored.stock.XS=0;
                           
                            productStored.sizes.splice(productStored.sizes.indexOf("XS"),1)
                            localStorage.setItem("currentProd",JSON.stringify(productStored))

                                           
                          }else{
                            productStored.sizes.push("XS")
                            localStorage.setItem("currentProd",JSON.stringify(productStored))
                            
                          }
                        }}/>}
              else{
                return <input key={index} type="checkbox" name="xsSizeOption" id="xsSizeOption" onChange={()=>{
                  if(productStored.sizes.includes("XS")){
                    productStored.sizes.splice(productStored.sizes.indexOf("XS"),1)
                    localStorage.setItem("currentProd",JSON.stringify(productStored))
                    
                  }else{
                    productStored.sizes.push("XS")
                    localStorage.setItem("currentProd",JSON.stringify(productStored))
                    
                  }
                }}/>}
              }
                
              )}
            
            <br />
            <label htmlFor="sSizeOption"> Small {"(S)"}</label>
            {[0].map((value,index)=>{
              if(productStored.sizes.includes("S")){
                return <input key={index} type="checkbox" name="sSizeOption" id="sSizeOption" defaultChecked onChange={()=>{
                          if(productStored.sizes.includes("S")){
                            productStored.sizes.splice(productStored.sizes.indexOf("S"),1)
                            localStorage.setItem("currentProd",JSON.stringify(productStored))
                            
                          }else{
                            productStored.sizes.push("S")
                            localStorage.setItem("currentProd",JSON.stringify(productStored))
                            
                          }
                        }}/>}
              else{
                return <input key={index} type="checkbox" name="sSizeOption" id="sSizeOption" onChange={()=>{
                  if(productStored.sizes.includes("S")){
                    productStored.sizes.splice(productStored.sizes.indexOf("XS"),1)
                    localStorage.setItem("currentProd",JSON.stringify(productStored))
                    
                  }else{
                    productStored.sizes.push("S")
                    localStorage.setItem("currentProd",JSON.stringify(productStored))
                    
                  }
                }}/>}
              }
                
              )}
            <br />
            <label htmlFor="mSizeOption">Medium {"(M)"}</label>
            {[0].map((value,index)=>{
              if(productStored.sizes.includes("M")){
                return <input key={index} type="checkbox" name="mSizeOption" id="mSizeOption" defaultChecked onChange={()=>{
                          if(productStored.sizes.includes("M")){
                            productStored.sizes.splice(productStored.sizes.indexOf("M"),1)
                            localStorage.setItem("currentProd",JSON.stringify(productStored))
                            
                          }else{
                            productStored.sizes.push("M")
                            localStorage.setItem("currentProd",JSON.stringify(productStored))
                           
                          }
                        }}/>}
              else{
                return <input key={index} type="checkbox" name="mSizeOption" id="mSizeOption" onChange={()=>{
                  if(productStored.sizes.includes("M")){
                    productStored.sizes.splice(productStored.sizes.indexOf("M"),1)
                    localStorage.setItem("currentProd",JSON.stringify(productStored))
                   
                  }else{
                    productStored.sizes.push("M")
                    localStorage.setItem("currentProd",JSON.stringify(productStored))
                    
                  }
                }}/>}
              }
                
              )}
            <br />
            <label htmlFor="lSizeOption">Large {"(L)"}</label>
            {[0].map((value,index)=>{
              if(productStored.sizes.includes("L")){
                return <input key={index} type="checkbox" name="lSizeOption" id="lSizeOption" defaultChecked onChange={()=>{
                          if(productStored.sizes.includes("L")){
                            productStored.sizes.splice(productStored.sizes.indexOf("L"),1)
                            localStorage.setItem("currentProd",JSON.stringify(productStored))
                           
                          }else{
                            productStored.sizes.push("L")
                            localStorage.setItem("currentProd",JSON.stringify(productStored))
                           
                          }
                        }}/>}
              else{
                return <input key={index} type="checkbox" name="lSizeOption" id="lSizeOption" onChange={()=>{
                  if(productStored.sizes.includes("L")){
                    productStored.sizes.splice(productStored.sizes.indexOf("L"),1)
                    localStorage.setItem("currentProd",JSON.stringify(productStored))
                    
                  }else{
                    productStored.sizes.push("L")
                    localStorage.setItem("currentProd",JSON.stringify(productStored))
                   
                  }
                }}/>}
              }
                
              )}
            <br />
            <label htmlFor="xlSizeOption">Extra Large {"(XL)"}</label>
            {[0].map((value,index)=>{
              if(productStored.sizes.includes("XL")){
                return <input key={index} type="checkbox" name="xlSizeOption" id="xlSizeOption" defaultChecked onChange={()=>{
                          if(productStored.sizes.includes("XL")){
                            productStored.sizes.splice(productStored.sizes.indexOf("XL"),1)
                            localStorage.setItem("currentProd",JSON.stringify(productStored))
                           
                          }else{
                            productStored.sizes.push("XL")
                            localStorage.setItem("currentProd",JSON.stringify(productStored))
                            
                          }
                        }}/>}
              else{
                return <input key={index} type="checkbox" name="xlSizeOption" id="xlSizeOption" onChange={()=>{
                  if(productStored.sizes.includes("XL")){
                    productStored.sizes.splice(productStored.sizes.indexOf("XL"),1)
                    localStorage.setItem("currentProd",JSON.stringify(productStored))
                    
                  }else{
                    productStored.sizes.push("XL")
                    localStorage.setItem("currentProd",JSON.stringify(productStored))
                   
                  }
                }}/>}
              }
                
              )}
          </ul>
          <div>Stock</div>
          <div>
            <label htmlFor="xsSizeStock">Extra Small {"(XS)"}</label>
            <input type="number" name="xsSizeStock" id="xsSizeStock" min={0} defaultValue={0}  onChange={(e)=>{
              if (productStored.sizes.includes("XS")) {
                productStored.stock.XS=Number(e.target.value)
              
                localStorage.setItem("currentProd",JSON.stringify(productStored));
              }
          
            }
          }/>
            <br />
            <label htmlFor="sSizeStock"> Small {"(S)"}</label>
            <input type="number" name="sSizeStock" id="sSizeStock" min={0} defaultValue={0} onChange={(e)=>{
              if (productStored.sizes.includes("S")) {
                productStored.stock.S=Number(e.target.value)
                localStorage.setItem("currentProd",JSON.stringify(productStored));
              }
              
              }}/>
            <br />
            <label htmlFor="mSizeStock">Medium {"(M)"}</label>
            <input type="number" name="mSizeStock" id="mSizeStock" min={0} defaultValue={0} onChange={(e)=>{
              if (productStored.sizes.includes("M")) {
                productStored.stock.M=Number(e.target.value)
                localStorage.setItem("currentProd",JSON.stringify(productStored));
              }
              
              }}/>
            <br />
            <label htmlFor="lSizeStock">Large {"(L)"}</label>
            <input type="number" name="lSizeStock" id="lSizeStock" min={0} defaultValue={0} onChange={(e)=>{
              if (productStored.sizes.includes("L")) {
                productStored.stock.L=Number(e.target.value)
                localStorage.setItem("currentProd",JSON.stringify(productStored));
              }
              
              }}/>
            <br />
            <label htmlFor="xlSizeStock">Extra Large {"(XS)"}</label>
            <input type="number" name="xlSizeStock" id="xlSizeStock" min={0} defaultValue={0} onChange={(e)=>{
              if (productStored.sizes.includes("XL")) {
                productStored.stock.XL=Number(e.target.value)
                localStorage.setItem("currentProd",JSON.stringify(productStored));
              }
              }}/>
          </div>
          <label htmlFor="formProdPrice">Price</label>
          <br />
          <span>€</span>
          <input type="number" name="formProdPrice" id="formProdPrice" min={0} placeholder={0} required onChange={(e)=>{
              
                productStored.price=e.target.value
                localStorage.setItem("currentProd",JSON.stringify(productStored));
              }} />
          <br />
          <label htmlFor="imageURLProd">Product Image</label>
          <br />
          <input type="url" name="imageURLProd" id="imageURLProd"style={{width:'70%'}} defaultValue={productStored.imgURL} placeholder='https://www.randomimage.com' required onChange={(e)=>{
            
              productStored.imgURL=e.target.value
              localStorage.setItem("currentProd",JSON.stringify(productStored));
            }} />
            <br /><br />
            <label htmlFor="description">Details</label>
            <br />
            <textarea name="description" id="description" style={{width:'90%', height:"7vh"}} onChange={(e)=>{
              productStored.details=e.target.value
              localStorage.setItem("currentProd",JSON.stringify(productStored));
              }}></textarea>
              <br />
          <button type="submit">Add Product</button>
        </form>
      </div>
      </section>
    </main>
    </>
  )
}

export default SellProduct