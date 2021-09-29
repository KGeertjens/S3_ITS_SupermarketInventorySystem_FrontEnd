import React from "react"
import ProductCard from "./ProductCard"

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