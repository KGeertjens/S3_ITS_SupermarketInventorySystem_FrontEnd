import React, { useState, useEffect } from "react"
import axios from "axios"

import ProductList from "./productComponents/ProductList"

const baseURL = "http://localhost:8080/products"

const Products = () => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setProducts(response.data)
        })
    }, [])

    if (!products) return(null)

    return(
        <>
            <h1>Products</h1>
            <ProductList products={products}/>
        </>
    )
}

export default Products