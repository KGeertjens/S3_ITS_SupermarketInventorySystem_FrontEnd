import React from "react"
import ProductCard from "./ProductCard"
import { Link } from "react-router-dom"

const ProductList = (props) => {
    return(
            <div className="productList">
                {props.products.map((product) =>{
                    return(<ProductCard product={product} key={product.id}/>)
                })}
            </div>
    )
}

export default ProductList