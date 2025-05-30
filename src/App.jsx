import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './Components/Pages/HomePage'
import RestaurantDetails from './Components/Pages/RestaurantDetails'
import CartPage from './Components/Pages/CartPage'
import LoginPage from './Components/Pages/LoginPage'
import SignupPage from './Components/Pages/SignupPage'
import ThankYouPage from './Components/Pages/ThankYouPage'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/thankyou" element={<ThankYouPage/>} />
      </Routes>
      
    </>
  )
}

export default App
