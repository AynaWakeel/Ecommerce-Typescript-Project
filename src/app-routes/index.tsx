import React from 'react'
import Home from '../pages/home'
import Shop from '../pages/shop'
import About from '../pages/about'
import Contact from '../pages/contact'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Route, Routes } from 'react-router'

const AppRoutes: React.FC = () => {
  return (
    <div>

        <Navbar/>

        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>

        </Routes>
        

        <Footer/>

    </div>
  )
}

export default AppRoutes