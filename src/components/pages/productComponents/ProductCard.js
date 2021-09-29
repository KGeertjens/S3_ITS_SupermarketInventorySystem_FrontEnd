import React from "react"
import image from "../../../img/apple.jpg"

const ProductCard = (props) => {
    let product = props.product
    
    return(
        <div className="productCard">
            <img src={image}/>  
            <div className="productInfo">
                <h3>{product.name}</h3>
                <p>&euro;{parseFloat(product.price).toFixed(2)}</p>
                <br></br>
                <p>Stock:  {product.stock}</p>
                <p>Expires on:  {product.nextExpirationDate}</p>
                <p>Next delivery:  {product.nextDeliveryDate}</p>
            </div>
        </div>
    )
}

export default ProductCard