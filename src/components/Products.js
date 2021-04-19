import React from 'react'
import Product from './Product'

const Products = ({products}) => {
    return (
       <>
       {products.map((product,id)=>(<Product product={product} key={id}/>))}
       
       </>
    )
}

export default Products
