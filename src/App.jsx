
import { useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import Header from './components/Header'
import ProductDetails from './components/ProductDetails'
import Products from './components/Products'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Payment from './components/payment'

function App() {

  let [cartProducts, setCartProducts] = useState([])
  return (
    <>
      <BrowserRouter>
        <Header cartProducts={cartProducts} />
        <Routes>
          <Route path="/" element={<Products cartProducts={cartProducts} setCartProducts={setCartProducts} />} />
          <Route path='/productdetails/:id' element={<ProductDetails cartProducts={cartProducts} setCartProducts={setCartProducts} />} />
          <Route path='/cart' element={<Cart cartProducts={cartProducts} setCartProducts={setCartProducts} />} />
          <Route path='/payment' element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
