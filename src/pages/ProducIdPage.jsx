import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFecth from '../hooks/useFetch'
import ProductInfo from '../components/ProductId/ProductInfo'
import SimilarProduct from '../components/ProductId/SimilarProduct'
import SliderImg from '../components/ProductId/SliderImg'

export const ProducIdPage = () => {

  const {id}  = useParams()
  
  const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1"

  const [product, getProductBiId] =useFecth(baseUrl)


  useEffect(() => {
    getProductBiId(`/products/${id}`)
  }, [id])



  return (
    <div>
      <SliderImg 
      product={product}
      />
      <ProductInfo
      product={product}
       />
       <SimilarProduct 
       product={product}
       />
    </div>
  )
}
