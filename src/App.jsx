import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAllProductsThunk } from './store/slices/Products.slice'
import { ProducIdPage } from './pages/ProducIdPage'
import RegisterPage from './pages/RegisterPage'
import { LoginPage } from './pages/LoginPage'
import Header from './components/shared/Header'
import CartPage from './pages/CartPage'
import { getCartThunk } from './store/slices/cart.slice'
import PurchasePage from './pages/PurchasePage'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsThunk())
    dispatch(getCartThunk())
  }, [])



  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:id' element={<ProducIdPage/>} />
        <Route path='/register' element={<RegisterPage />}/>
        <Route path='/login' element={<LoginPage />}/>

        <Route element={<ProtectedRoutes/>}>
        <Route path='/cart' element={<CartPage />}/>
        <Route path='/purchase' element={<PurchasePage />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
