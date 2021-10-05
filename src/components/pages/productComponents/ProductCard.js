import React from "react"
import { Link } from "react-router-dom"

const ProductCard = (props) => {
    let product = props.product
    
    let link = "/products/" + product.id
    const image = require("../../../img/" + product.img)

    return(
            <div className="productCard">
            <Link to={link}>
                <div className="imgDiv">
                    <img src={image.default}/>  
                </div>
                <div className="productInfo">
                    <h2>{product.name}</h2>
                    <p>&euro;{parseFloat(product.price).toFixed(2)}</p>
                </div>
                </Link>
            </div>
    )
}

export default ProductCard