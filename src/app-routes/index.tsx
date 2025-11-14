import React from 'react'
import Home from '../pages/home'
import Shop from '../pages/shop'
import About from '../pages/about'
import Contact from '../pages/contact'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Route, Routes } from 'react-router'
import MyAccount from '../pages/account'
import Checkout from '../pages/checkout'
import SingleProduct from '../pages/single-product'
import Cart from '../pages/cart'

const AppRoutes: React.FC = () => {
  return (
    <div>

        <Navbar/>

        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/single-product' element={<SingleProduct/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/myaccount' element={<MyAccount/>}/>

        </Routes>
        

        <Footer/>

    </div>
  )
}

export default AppRoutes