import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import FilterCategory from '../components/Home/FilterCategory'
import FilterPrice from '../components/Home/FilterPrice'
import "./styles/Home.css"

const Home = () => {

  const [inputValue, setInputValue] = useState("")

  const [priceMinMax, setPriceMinMax] = useState({
    min:0,
    max:Infinity
  })

  const products = useSelector(states => states.products)


  
  const handleSearchName = e =>{
    setInputValue(e.target.value.toLowerCase());
  };

  const cbFilter = prod => prod.title.toLowerCase().includes(inputValue)

  const cbFilterPrice = prod => {
    const  condMin = priceMinMax.min <= prod.price 
    const condMax = prod.price <= priceMinMax.max
    return condMin && condMax
  }
  return (
    <div className='home'>
      <form className='home__form-busqueda'>
      <input className='home__input'  value={inputValue} onChange={handleSearchName} type="text" placeholder='what are you looking for?'/>
      <button className='home__lupa home__input-btn'>
      <i className='bx bx-search-alt'></i>
      </button>
      </form>
      <aside className='home__body'>
        <FilterPrice
        priceMinMax={priceMinMax}
        setPriceMinMax={setPriceMinMax}
        />
        <FilterCategory/>
      </aside>
      <div className='home__product-container'>
        {
          products?.filter(cbFilter).filter(cbFilterPrice).map(product => (
            <CardProduct 
            key={product.id}
            product={product}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home