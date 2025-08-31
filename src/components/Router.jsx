import React from 'react'
import { Route, Routes } from 'react-router'
import ProductDetails from '../pages/ProductDetails'
import Home from '../pages/Home'
import AddProduct from '../pages/AddProduct'
import About from '../pages/About'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/detail/:id' element={<ProductDetails />} />
        <Route path='/addProduct' element={<AddProduct />} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default Router
