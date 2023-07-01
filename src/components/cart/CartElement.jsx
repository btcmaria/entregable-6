import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteCartThunk } from '../../store/slices/cart.slice'
import "./styles/CartElement.css"
const CartElement = ({prod}) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteCartThunk(prod.id))
    }

    console.log(prod)
 
  return (
    <>
      <article className='product__info'>
        <header className='product__img'>
            <img src={prod.product.images[0].url} alt="" />
        </header>
        <section className='product__title'>
            <h3>{prod.product.title}</h3>
            <div></div>
            <p><span>{prod.quantity}</span> x <span>${prod.product.price}</span></p>
            <button className='product__btn' onClick={handleDelete}>
                <i className='bx bx-trash'></i>
            </button>
        </section>
        <footer>
            <span className='product__subtotal'>Subtotal:  </span><span>{prod.quantity * prod.product.price}</span>
        </footer>
    </article>
    </>
  )
}

export default CartElement