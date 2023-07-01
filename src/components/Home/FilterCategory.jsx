import React, { useEffect } from 'react'
import useFecth from '../../hooks/useFetch'
import { getAllProductsThunk } from '../../store/slices/Products.slice'
import { useDispatch } from 'react-redux'

const FilterCategory = () => {

    const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1"
    const [categories, getAllCategories] = useFecth(baseUrl)

    
    useEffect(()=>{
        getAllCategories("/categories")
    }, [])

    const dispacth = useDispatch()
    
    const handleFilterCategory = id => {
        if(id){
            const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
            dispacth(getAllProductsThunk(url));
        } else {
            dispacth(getAllProductsThunk());
        }

    }

  return (
    <article>
        <h3>Categories</h3>
        <ul>
            <li onClick={() =>handleFilterCategory()}>All Categories</li>
            {
             categories?.map(category =>(
                <li onClick={() =>handleFilterCategory(category.id)} style={{cursor: "pointer"}}
                 key={category.id}>{category.name}</li>
             ))
             
            }
        </ul>
    </article>
  )
}

export default FilterCategory