import { useState,useEffect } from 'react'
import Header from '../../components/Header/Header';
import { Link, useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';
import "./EditProdPage.css"
import "../SellProduct/./SellProduct.css"
function EditProdPage() {

    const { itemID } = useParams();

const[reRender,setReRender]=useState(true);
useEffect((()=>{

}),[reRender])
  const[productStored,setProductStorage]=useState({
    name:'',
    sizes:[],
    price:'',
    stock:{XS:0,S:0,M:0,L:0,XL:0},
    imgURL:"",
    details:""
  })
  
  const[product,setProductData]=useState({
    name:'',
    sizes:[],
    price:'',
    stock:{XS:0,S:0,M:0,L:0,XL:0},
    imgURL:"",
    details:""
  }
  )
useEffect(()=>{
    fetchData()

},[])

  const fetchData=async()=>{
    try {
      
        const response = await fetch(`http://localhost:8080/products/${itemID}`);
        const result = await response.json()
  
        setProductStorage(result[0])
        setProductData(result[0])
    } catch (error) {
        console.error('Error fetching data:', error)
    }
}
  const fetchDataPatch=async()=>{
    try {
 
        let response = await fetch(`http://localhost:8080/update/${itemID}`,{method:"PATCH",body:JSON.stringify(productStored),headers: {
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
    <main>
      <section>
        <h1>Edit Product</h1>
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
                    fetchDataPatch()
                    alert("Product edited")
                }
            
                
            
            }}>
            <label htmlFor="formProdName"> Product Name </label>
            <input type="text" name='formProdName' id='formProdName' defaultValue={productStored.name} onChange={()=>{
              productStored.name=document.getElementById('formProdName').value;

       
            }}/>
            <label htmlFor=""></label>
            <div className='prodEdSellTitles'>Sizes</div>
            <ul id='sizeOptions'>
              <label htmlFor="xsSizeOption">Extra Small {"(XS)"}</label>
              {[0].map((value,index)=>{
                if(productStored.sizes.includes("XS")){
                  return <input key={index} type="checkbox" name="xsSizeOption" id="xsSizeOption" defaultChecked onChange={()=>{
                            if(productStored.sizes.includes("XS")){
                              productStored.stock.XS=0;
                                 
                              productStored.sizes.splice(productStored.sizes.indexOf("XS"),1)

                                          
                            }else{
                              productStored.sizes.push("XS")
                             
                            }
                          }}/>}
                else{
                  return <input key={index} type="checkbox" name="xsSizeOption" id="xsSizeOption" onChange={()=>{
                    if(productStored.sizes.includes("XS")){
                      productStored.sizes.splice(productStored.sizes.indexOf("XS"),1)
              
                    }else{
                      productStored.sizes.push("XS")
                
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
                          
                            }else{
                              productStored.sizes.push("S")
                              
                            }
                          }}/>}
                else{
                  return <input key={index} type="checkbox" name="sSizeOption" id="sSizeOption" onChange={()=>{
                    if(productStored.sizes.includes("S")){
                      productStored.sizes.splice(productStored.sizes.indexOf("XS"),1)
              
                    }else{
                      productStored.sizes.push("S")
                  
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
                          
                            }else{
                              productStored.sizes.push("M")
                            
                            }
                          }}/>}
                else{
                  return <input key={index} type="checkbox" name="mSizeOption" id="mSizeOption" onChange={()=>{
                    if(productStored.sizes.includes("M")){
                      productStored.sizes.splice(productStored.sizes.indexOf("M"),1)
                  
                    }else{
                      productStored.sizes.push("M")
                    
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
                        
                            }else{
                              productStored.sizes.push("L")
      
                            }
                          }}/>}
                else{
                  return <input key={index} type="checkbox" name="lSizeOption" id="lSizeOption" onChange={()=>{
                    if(productStored.sizes.includes("L")){
                      productStored.sizes.splice(productStored.sizes.indexOf("L"),1)
          
                      
                    }else{
                      productStored.sizes.push("L")
                
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
                        
                              
                            }else{
                              productStored.sizes.push("XL")
                            
                              
                            }
                          }}/>}
                else{
                  return <input key={index} type="checkbox" name="xlSizeOption" id="xlSizeOption" onChange={()=>{
                    if(productStored.sizes.includes("XL")){
                      productStored.sizes.splice(productStored.sizes.indexOf("XL"),1)
                    
                      
                    }else{
                      productStored.sizes.push("XL")
                  
                     
                    }
                  }}/>}
                }
                  
                )}
            </ul>
            <div className='prodEdSellTitles'>Stock</div>
            <div>
                <div>Previous Stock</div>
                <span>XS:{product.stock.XS} </span>
                <span>S:{product.stock.S} </span>
                <span>M:{product.stock.M} </span>
                <span>L:{product.stock.L} </span>
                <span>XL:{product.stock.XL} </span>
            </div>

            <div>
              <label htmlFor="xsSizeStock">Extra Small {"(XS)"}</label>
              <input type="number" name="xsSizeStock" id="xsSizeStock" min={0} defaultValue={productStored.stock.XS}  onChange={(e)=>{
                
                  productStored.stock.XS=Number(e.target.value)
                
            
              }
            }/>
              <br />
              <label htmlFor="sSizeStock"> Small {"(S)"}</label>
              <input type="number" name="sSizeStock" id="sSizeStock" min={0} defaultValue={productStored.stock.S} onChange={(e)=>{
                
                  productStored.stock.S=Number(e.target.value)
                
                
                }}/>
              <br />
              <label htmlFor="mSizeStock">Medium {"(M)"}</label>
              <input type="number" name="mSizeStock" id="mSizeStock" min={0} defaultValue={productStored.stock.M} onChange={(e)=>{
                
                  productStored.stock.M=Number(e.target.value)
                
                
                }}/>
              <br />
              <label htmlFor="lSizeStock">Large {"(L)"}</label>
              <input type="number" name="lSizeStock" id="lSizeStock" min={0} defaultValue={productStored.stock.L} onChange={(e)=>{
              
                  productStored.stock.L=Number(e.target.value)
                
                
                }}/>
              <br />
              <label htmlFor="xlSizeStock">Extra Large {"(XS)"}</label>
              <input type="number" name="xlSizeStock" id="xlSizeStock" min={0} defaultValue={productStored.stock.XL} onChange={(e)=>{
              
                  productStored.stock.XL=Number(e.target.value)
                
                }}/>
            </div>
            <div className='prodEdSellTitles'>Price</div>
            <label htmlFor="formProdPrice">€</label>
            <input type="number" name="formProdPrice" id="formProdPrice" min={0} step={0.01} defaultValue={productStored.price} required onChange={(e)=>{
                
                  productStored.price=Number(e.target.value)
        
                }} />
            <br />
            <div className='prodEdSellTitles'>Product Image</div>
            <input type="url" name="imageURLProd" id="imageURLProd" defaultValue={productStored.imgURL} placeholder='https://www.randomimage.com' required onChange={(e)=>{  
                productStored.imgURL=e.target.value
              }} />
              <br /><br />
              <label htmlFor="description" className='prodEdSellTitles'>Details</label>
              <br />
              <textarea name="description" id="description" style={{width:'90%', height:"7vh"}} onChange={(e)=>{
                productStored.details=e.target.value
                }}></textarea>
                <br />
            <button type="submit">Edit Product</button>
            
          </form>
          <br />
          <Popup className='popup' trigger={<button>DELETE</button>} modal >
          
          {close => (<>
          <div className='areUSure'> Are You Sure?</div>

          <div className="modal">
            <Link to="/shop">
          <button className="sure" onClick={async()=>{
            try {
            
                let response = await fetch(`http://localhost:8080/delete/${itemID}`,{method:"DELETE"});
                return response.json()
            } catch (error) {
                console.error('Error fetching data:', error)
            }
            }}>
              Yes
            </button></Link>
            <button className="notSure" onClick={close}>
              No
            </button>
          </div>
        </>
        )}
        
          </Popup>
        </div>
      </section>
    </main>
    </>
  )
}

export default EditProdPage