import React from 'react'
import CartElement from '../components/cart/CartElement'
import usePurchase from '../hooks/usePurchase'
import { useSelector } from 'react-redux'
import "./styles/CartPage.css"


const CartPage = () => {

  
  const cart = useSelector(states => states.cart)
    const totalPrice = cart.reduce((acc, cv) => {
      const subtotal = cv.quantity * cv.product.price
      return acc + subtotal
    }, 0)

    const {makePurchase} = usePurchase()


    
    const handlePurchase = () =>{
      makePurchase()
    }
  return (
    <div>
        <h2 className='product__title'>shopping cart</h2>
        <div>
          {
            cart.map(prod => (
              <CartElement
              key={prod.id}
              prod={prod}
               />
            ))
          }
        </div>
        <hr />
        <footer className='product__footer'>
          <div className='product__total'>
            <span>total:</span> <span>{totalPrice}</span>
          </div>
          <button className='product__btn-total' onClick={handlePurchase}>Purchase this cart</button>
        </footer>
    </div>
  )
}

export default CartPage