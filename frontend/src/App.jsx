import React from 'react'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import 'remixicon/fonts/remixicon.css'
// import AddProducts from "./pages/Addproducts"
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import UserHome from './pages/userspage/UserHome'
import UserProductDetail from './pages/userspage/UserProductDetail'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import CartPage from './pages/CartPage'  // Added import for CartPage
import Contact from './pages/Contact'
import Checkout from './pages/Checkout'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<UserHome/>}/> */}
        <Route path='/products/detail/:productId' element={<UserProductDetail/>}/>
        {/* <Route path='/admin/products/add' element={<AddProducts/>}/> */}
        <Route path='/admin/products/detail/:productId' element={<ProductDetail/>}/>
        <Route path='/' element={<SignUpPage/>}/>
        <Route path='/SignInPage' element={<SignInPage/>}/>
        <Route path='/signin' element={<SignInPage/>}/>
        <Route path='/Home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path='/cart' element={<ProtectedRoute><CartPage/></ProtectedRoute>}/>  {/* Added route for CartPage */}
        <Route path='/contact' element={<Contact/>}/>  {/* Added route for Contact */}
        <Route path='/checkout' element={<ProtectedRoute><Checkout/></ProtectedRoute>}/>  {/* Added route for Checkout */}
        <Route path='/about' element={<About/>}/>  {/* Added route for About */}
        <Route path='/shop' element={<ProtectedRoute><Home/></ProtectedRoute>}/>  {/* Added route for Shop */}
        <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>  {/* Added route for home */}
      </Routes>
    </div>
  )
}

export default App
