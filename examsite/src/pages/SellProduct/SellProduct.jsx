import { useState,useEffect } from 'react'
import Header from '../../components/Header/Header';
import { Form, useParams } from 'react-router-dom';
import AddToCartButton from '../../components/AddToCartButton/AddToCartButton';

function SellProduct(props) {



  if(localStorage.getItem("currentProd")==null){
    localStorage.setItem("currentProd",JSON.stringify({
    name:'',
    sizes:[],
    price:'',
    stock:{XS:0,S:0,M:0,L:0,XL:0}
  }))
  }
  const[productStored,setProductStorage]=useState(JSON.parse(localStorage.getItem("currentProd")))
  const[product,setProductData]=useState({
    name:'',
    sizes:[],
    price:'',
    stock:{XS:0,S:0,M:0,L:0,XL:0}
  }
  )

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
            if((sizeArray[0].checked || sizeArray[1].checked || sizeArray[2].checked || sizeArray[3].checked || sizeArray[4].checked)){
              console.log('lol')
            }
        
        
        
        }}>
        <label htmlFor="formProdName"> Product Name </label>
        <input type="text" name='formProdName' id='formProdName' defaultValue={productStored.name} onChange={()=>{
          productStored.name=document.getElementById('formProdName').value;
          localStorage.setItem("currentProd",JSON.stringify(productStored))
          console.log(product.name)
        }}/>
        <label htmlFor=""></label>
        <div>Sizes</div>
        <ul id='sizeOptions'>
          <label htmlFor="xsSizeOption">Extra Small {"(XS)"}</label>
          {[0].map((value,index)=>{
            if(productStored.sizes.includes("XS")){
              return <input key={index} type="checkbox" name="xsSizeOption" id="xsSizeOption" defaultChecked onChange={()=>{
                        if(productStored.sizes.includes("XS")){
                          productStored.sizes.splice(productStored.sizes.indexOf("XS"),1)
                          localStorage.setItem("currentProd",JSON.stringify(productStored))
                          console.log(productStored.sizes)
                        }else{
                          productStored.sizes.push("XS")
                          localStorage.setItem("currentProd",JSON.stringify(productStored))
                          console.log(productStored.sizes)
                        }
                      }}/>}
            else{
              return <input key={index} type="checkbox" name="xsSizeOption" id="xsSizeOption" onChange={()=>{
                if(productStored.sizes.includes("XS")){
                  productStored.sizes.splice(productStored.sizes.indexOf("XS"),1)
                  localStorage.setItem("currentProd",JSON.stringify(productStored))
                  console.log(productStored.sizes)
                }else{
                  productStored.sizes.push("XS")
                  localStorage.setItem("currentProd",JSON.stringify(productStored))
                  console.log(productStored.sizes)
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
                          console.log(productStored.sizes)
                        }else{
                          productStored.sizes.push("S")
                          localStorage.setItem("currentProd",JSON.stringify(productStored))
                          console.log(productStored.sizes)
                        }
                      }}/>}
            else{
              return <input key={index} type="checkbox" name="sSizeOption" id="sSizeOption" onChange={()=>{
                if(productStored.sizes.includes("S")){
                  productStored.sizes.splice(productStored.sizes.indexOf("XS"),1)
                  localStorage.setItem("currentProd",JSON.stringify(productStored))
                  console.log(productStored.sizes)
                }else{
                  productStored.sizes.push("S")
                  localStorage.setItem("currentProd",JSON.stringify(productStored))
                  console.log(productStored.sizes)
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
                          console.log(productStored.sizes)
                        }else{
                          productStored.sizes.push("M")
                          localStorage.setItem("currentProd",JSON.stringify(productStored))
                          console.log(productStored.sizes)
                        }
                      }}/>}
            else{
              return <input key={index} type="checkbox" name="mSizeOption" id="mSizeOption" onChange={()=>{
                if(productStored.sizes.includes("M")){
                  productStored.sizes.splice(productStored.sizes.indexOf("M"),1)
                  localStorage.setItem("currentProd",JSON.stringify(productStored))
                  console.log(productStored.sizes)
                }else{
                  productStored.sizes.push("M")
                  localStorage.setItem("currentProd",JSON.stringify(productStored))
                  console.log(productStored.sizes)
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
                          console.log(productStored.sizes)
                        }else{
                          productStored.sizes.push("L")
                          localStorage.setItem("currentProd",JSON.stringify(productStored))
                          console.log(productStored.sizes)
                        }
                      }}/>}
            else{
              return <input key={index} type="checkbox" name="lSizeOption" id="lSizeOption" onChange={()=>{
                if(productStored.sizes.includes("L")){
                  productStored.sizes.splice(productStored.sizes.indexOf("L"),1)
                  localStorage.setItem("currentProd",JSON.stringify(productStored))
                  console.log(productStored.sizes)
                }else{
                  productStored.sizes.push("L")
                  localStorage.setItem("currentProd",JSON.stringify(productStored))
                  console.log(productStored.sizes)
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
                          console.log(productStored.sizes)
                        }else{
                          productStored.sizes.push("XL")
                          localStorage.setItem("currentProd",JSON.stringify(productStored))
                          console.log(productStored.sizes)
                        }
                      }}/>}
            else{
              return <input key={index} type="checkbox" name="xlSizeOption" id="xlSizeOption" onChange={()=>{
                if(productStored.sizes.includes("XL")){
                  productStored.sizes.splice(productStored.sizes.indexOf("XL"),1)
                  localStorage.setItem("currentProd",JSON.stringify(productStored))
                  console.log(productStored.sizes)
                }else{
                  productStored.sizes.push("XL")
                  localStorage.setItem("currentProd",JSON.stringify(productStored))
                  console.log(productStored.sizes)
                }
              }}/>}
            }
              
            )}
        </ul>
        <div>Stock</div>
        <div>
          <label htmlFor="xsSizeStock">Extra Small {"(XS)"}</label>
          <input type="number" name="xsSizeStock" id="xsSizeStock" min={0} placeholder='0'/>
          <br />
          <label htmlFor="sSizeStock"> Small {"(S)"}</label>
          <input type="number" name="sSizeStock" id="sSizeStock" min={0} placeholder='0'/>
          <br />
          <label htmlFor="mSizeStock">Medium {"(M)"}</label>
          <input type="number" name="mSizeStock" id="mSizeStock" min={0} placeholder='0'/>
          <br />
          <label htmlFor="lSizeStock">Large {"(L)"}</label>
          <input type="number" name="lSizeStock" id="lSizeStock" min={0} placeholder='0'/>
          <br />
          <label htmlFor="xlSizeStock">Extra Large {"(XS)"}</label>
          <input type="number" name="xlSizeStock" id="xlSizeStock" min={0} placeholder='0'/>
        </div>
        <div>Price</div>
        <label htmlFor="formProdPrice">€</label>
        <input type="number" name="formProdPrice" id="formProdPrice" min={0} required/>
        <button type="submit">Add Product</button>
      </form>
    </div>

    </>
  )
}

export default SellProduct