import { useState,useEffect } from 'react'
import Header from '../../components/Header/Header';
import { Form, useParams } from 'react-router-dom';


function EditProdPage(props) {



  if(localStorage.getItem("currentProd")==null){
    localStorage.setItem("currentProd",JSON.stringify({
    name:'',
    sizes:[],
    price:'',
    stock:{XS:0,S:0,M:0,L:0,XL:0},
    imgURL:""
  }))
  }
  const[productStored,setProductStorage]=useState(props.product)
  const[product,setProductData]=useState({
    name:'',
    sizes:[],
    price:'',
    stock:{XS:0,S:0,M:0,L:0,XL:0},
    imgURL:""
  }
  )
  const fetchData=async()=>{
    try {
      console.log(productStored)
        let response = await fetch(`http://localhost:8080/update/${productStored._id}`,{method:"PATCH",body:JSON.stringify(productStored),headers: {
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
    //   stock:{XS:0,S:0,M:0,L:0,XL:0},
    //   imgURL:""
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
            if(((sizeArray[0].checked && productStored.stock.XS>0) || 
            (sizeArray[1].checked && productStored.stock.S>0) || 
            (sizeArray[2].checked  && productStored.stock.M>0) || 
            (sizeArray[3].checked && productStored.stock.L>0) || 
            (sizeArray[4].checked && productStored.stock.XL>0)) && productStored.name!=""){
                fetchData()
              console.log(1)
            }
        
            
        
        }}>
        <label htmlFor="formProdName"> Product Name </label>
        <input type="text" name='formProdName' id='formProdName' defaultValue={productStored.name} onChange={()=>{
          productStored.name=document.getElementById('formProdName').value;

          console.log(productStored)
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
                          console.log(productStored.stock.XS)    
                          productStored.sizes.splice(productStored.sizes.indexOf("XS"),1)

                          console.log(productStored.sizes)                   
                        }else{
                          productStored.sizes.push("XS")
                          console.log(productStored.sizes)
                        }
                      }}/>}
            else{
              return <input key={index} type="checkbox" name="xsSizeOption" id="xsSizeOption" onChange={()=>{
                if(productStored.sizes.includes("XS")){
                  productStored.sizes.splice(productStored.sizes.indexOf("XS"),1)
           
                  console.log(productStored.sizes)
                }else{
                  productStored.sizes.push("XS")
            
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
                       
                          console.log(productStored.sizes)
                        }else{
                          productStored.sizes.push("S")
                          
                          console.log(productStored.sizes)
                        }
                      }}/>}
            else{
              return <input key={index} type="checkbox" name="sSizeOption" id="sSizeOption" onChange={()=>{
                if(productStored.sizes.includes("S")){
                  productStored.sizes.splice(productStored.sizes.indexOf("XS"),1)
           
                  console.log(productStored.sizes)
                }else{
                  productStored.sizes.push("S")
              
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
                       
                          console.log(productStored.sizes)
                        }else{
                          productStored.sizes.push("M")
                        
                          console.log(productStored.sizes)
                        }
                      }}/>}
            else{
              return <input key={index} type="checkbox" name="mSizeOption" id="mSizeOption" onChange={()=>{
                if(productStored.sizes.includes("M")){
                  productStored.sizes.splice(productStored.sizes.indexOf("M"),1)
               
                  console.log(productStored.sizes)
                }else{
                  productStored.sizes.push("M")
                
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
                     
                          console.log(productStored.sizes)
                        }else{
                          productStored.sizes.push("L")
   
                          console.log(productStored.sizes)
                        }
                      }}/>}
            else{
              return <input key={index} type="checkbox" name="lSizeOption" id="lSizeOption" onChange={()=>{
                if(productStored.sizes.includes("L")){
                  productStored.sizes.splice(productStored.sizes.indexOf("L"),1)
      
                  console.log(productStored.sizes)
                }else{
                  productStored.sizes.push("L")
            
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
                    
                          console.log(productStored.sizes)
                        }else{
                          productStored.sizes.push("XL")
                        
                          console.log(productStored.sizes)
                        }
                      }}/>}
            else{
              return <input key={index} type="checkbox" name="xlSizeOption" id="xlSizeOption" onChange={()=>{
                if(productStored.sizes.includes("XL")){
                  productStored.sizes.splice(productStored.sizes.indexOf("XL"),1)
                
                  console.log(productStored.sizes)
                }else{
                  productStored.sizes.push("XL")
               
                  console.log(productStored.sizes)
                }
              }}/>}
            }
              
            )}
        </ul>
        <div>Stock</div>
        <div>
          <label htmlFor="xsSizeStock">Extra Small {"(XS)"}</label>
          <input type="number" name="xsSizeStock" id="xsSizeStock" min={0} defaultValue={productStored.stock.XS}  onChange={(e)=>{
            if (productStored.sizes.includes("XS")) {
              productStored.stock.XS=e.target.value
            }
         
          }
        }/>
          <br />
          <label htmlFor="sSizeStock"> Small {"(S)"}</label>
          <input type="number" name="sSizeStock" id="sSizeStock" min={0} defaultValue={productStored.stock.S} onChange={(e)=>{
            if (productStored.sizes.includes("S")) {
              productStored.stock.S=e.target.value
            }
            
            }}/>
          <br />
          <label htmlFor="mSizeStock">Medium {"(M)"}</label>
          <input type="number" name="mSizeStock" id="mSizeStock" min={0} defaultValue={productStored.stock.M} onChange={(e)=>{
            if (productStored.sizes.includes("M")) {
              productStored.stock.M=e.target.value
            }
            
            }}/>
          <br />
          <label htmlFor="lSizeStock">Large {"(L)"}</label>
          <input type="number" name="lSizeStock" id="lSizeStock" min={0} defaultValue={productStored.stock.L} onChange={(e)=>{
            if (productStored.sizes.includes("L")) {
              productStored.stock.L=e.target.value
            }
            
            }}/>
          <br />
          <label htmlFor="xlSizeStock">Extra Large {"(XS)"}</label>
          <input type="number" name="xlSizeStock" id="xlSizeStock" min={0} defaultValue={productStored.stock.XL} onChange={(e)=>{
            if (productStored.sizes.includes("XL")) {
              productStored.stock.XL=e.target.value
            }
            }}/>
        </div>
        <div>Price</div>
        <label htmlFor="formProdPrice">€</label>
        <input type="number" name="formProdPrice" id="formProdPrice" min={0} defaultValue={productStored.price} required onChange={(e)=>{
            
              productStored.price=e.target.value
    
            }} />
        <br />
        <div>Product Image</div>
        <input type="url" name="imageURLProd" id="imageURLProd" defaultValue={productStored.imgURL} placeholder='https://www.randomimage.com' required onChange={(e)=>{  
            productStored.imgURL=e.target.value
          }} />
           <br /><br />
        <button type="submit">Add Product</button>
      </form>
    </div>

    </>
  )
}

export default EditProdPage