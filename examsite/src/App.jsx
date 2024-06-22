import { useState } from 'react'
import {
  Route,Routes
} from "react-router-dom";
import './App.css'
import HomePage from './pages/HomePage/HomePage.jsx';
import Shop from './pages/Shop/Shop.jsx';
import ProductPage from './pages/ProductPage/ProductPage.jsx';
import Cart from './pages/Cart/Cart.jsx';
import SellProduct from './pages/SellProduct/SellProduct.jsx';
import EditProdPage from './pages/EditProdPage/EditProdPage.jsx';

function App() {


  return (
    <>
    
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/shop/:itemID" element={<ProductPage/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/sell" element={<SellProduct/>}></Route>
        <Route path="/edit/:itemID" element={<EditProdPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
