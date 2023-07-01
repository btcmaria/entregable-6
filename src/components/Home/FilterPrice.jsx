import React from 'react'
import { useForm } from 'react-hook-form'


const FilterPrice = ({setPriceMinMax, priceMinMax}) => {

  const {register,handleSubmit} = useForm()

  const submit = data => {
    const min = +data.from.trim() === "" ? 0 : +data.from
    const max = data.to.trim() === "" ? Infinity : +data.to

    setPriceMinMax({min, max})
  }

  const handleClearFliter = () => {
    setPriceMinMax({min: 0, max: Infinity})
    reset({
      from: "",
      to: ""
    })
  }

  return (
    <article>
        <h3>Price</h3>
        <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="from">From</label>
          <input {...register("from")} type="numbert" id='from'/>
        </div>
        <div>
          <label htmlFor="to">To</label>
          <input {...register("to")} type="number" id='to'/>
        </div>
        <button>Filter Price</button>
      </form>
      {
        priceMinMax !== 0 || priceMinMax.max !== Infinity 
        ? (<p>from{priceMinMax.min} to {priceMinMax.max} <b onClick={handleClearFliter} style={{cursor: "pointer"}}>x</b></p>)
        : ""
      }
    </article>
  )
}

export default FilterPrice