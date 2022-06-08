import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from './screens/Home'
import Products from './screens/Products'
import Detail from './screens/Detail'
import Cart from './screens/Detail'
import './App.scss'


export default function App() {
  return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>  
        )  
}
