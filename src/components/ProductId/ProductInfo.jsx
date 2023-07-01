import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { PostCartThunk } from '../../store/slices/cart.slice'

const ProductInfo = ({product}) => {

    const [Quantity, setQuantity] = useState(1)

    const handleAdd = () => setQuantity(state => state + 1)

    const handleMinus = () => {
        if(Quantity - 1 >= 1){
            setQuantity(state => state -1)
        }
        /**/ 
    }

    const dispatch = useDispatch()

const handleAddtoCart = () => {
    dispatch(PostCartThunk(product, Quantity))
}

  return (
    <article>
        <h3>{product?.brand}</h3>
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <footer>
            <ul>
                <li>
                    <span>Price</span>
                    <span>{product?.price}</span>
                </li>
                <li>
                    <span>Quantity</span>
                    <div>
                        <div onClick={handleMinus}>-</div>
                        <div>{Quantity}</div>
                        <div onClick={handleAdd}>+</div>
                    </div>
                </li>
            </ul>
            <button onClick={handleAddtoCart}>Add to cart <i className='bx bx-cart'></i></button>
            </footer>
    </article>
  )
}

export default ProductInfo