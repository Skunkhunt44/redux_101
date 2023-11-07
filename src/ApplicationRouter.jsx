import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom'
import HomePage from './HomePage.jsx'
import App from './App.jsx'
import Checkout from './components/Checkout.jsx'
import getProducts from './Libs/getProducts.js'
import Carts from './components/Carts.jsx'
import Products from './Products.jsx'




const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route index element={<HomePage />}/>
        <Route path='products' element={<Products/>} loader={getProducts} />
        <Route path='carts' element={<Carts/>}/>
        <Route path='checkout' element={<Checkout/>}/> 
    </Route>
  ))

  export default router

  