import React from 'react'
import "./styles/PurchaseCard.css"

const PurchaseCard = ({prod}) => {
  return (
    <article className='purchase'>
      <div className='image'>
        <img src={prod.product.images[0].url} alt="" />
      </div>
      <div className='name'>
        <h3>{prod.product.title}</h3>
      </div>
        <div className='quantity'>
            <span>quantity: <b>{prod.quantity}</b></span>
        </div>
        <div className='price'>
          <span>${prod.product.price}</span>
        </div>
    </article>
  )
}

export default PurchaseCard