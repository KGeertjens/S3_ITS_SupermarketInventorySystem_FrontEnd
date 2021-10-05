import React from "react"
import { Link } from "react-router-dom"

const ProductCard = (props) => {
    let product = props.product
    
    let link = "/products/" + product.id
    const image = require("../../../img/" + product.img)

    let price = <h2 className="price">&euro;{parseFloat(product.price).toFixed(2)}</h2>
    let dealDescription = <></>
    let dealStyle={
        "height" : "30px",
        "min-width" : "150px",
        "padding" : "2px",
        "margin" : "12px",
        "overflow" : "hidden"
        }
    if(product.deal != null){
        dealDescription = <div className="dealDescription" style={dealStyle}>
                            <p>{product.deal.description}</p>
                        </div>
        price = <div>
                    <h2 className="oldPrice">&euro;{parseFloat(product.productDealPriceDTO.originalPrice).toFixed(2)}</h2>
                    <h2 className="dealPrice">&euro;{parseFloat(product.productDealPriceDTO.dealPrice).toFixed(2)}</h2>
                </div>
    }

    return(
            <div className="productCard">
            <Link to={link}>
                <div className="imgDiv">
                    <img src={image.default}/>  
                </div>
                <div className="productInfo">
                    <h2>{product.name}</h2>
                    {price}
                </div>
                {dealDescription}
                </Link>
            </div>
    )
}

export default ProductCard