import React, { useEffect } from 'react'
import useFecth from '../../hooks/useFetch'
import CardProduct from '../Home/CardProduct'

const SimilarProduct = ({product}) => {


    const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'
    const [productsByCategory, getProductsByCategory] = useFecth(baseUrl)

    useEffect(() => {
        if(product) {
            getProductsByCategory(`/products?categoryId=${product.category.id}`)
        }
    }, [product])

  return (
    <div>
        <h2>similar Products</h2>
        <div >
            {
                productsByCategory?.map(prod =>  {
                    if(prod.id !== product.id){
                        return (<CardProduct
                    key={prod.id}
                    product={prod} 
                     />)
                    }
                })
            }       
        </div>
    </div>
  )
}

export default SimilarProduct