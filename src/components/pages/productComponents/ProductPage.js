import React, { useState, useEffect } from "react"
import axios from "axios"
import { FaTruck } from "react-icons/fa"
import { FiPackage } from "react-icons/fi"
import { FaCalendarTimes } from "react-icons/fa"

const ProductPage = () => {
    const baseURL = "http://localhost:8080/products/"
    let splitString = window.location.href.split("/")
    let productID = splitString[splitString.length-1]
    let URL = baseURL + productID
    
    const [product, setProduct] = useState(null)

    useEffect(() => {
        axios.get(URL).then((response) => {
            setProduct(response.data)
        })
    }, [])

    if (!product) return(null)

    const image = require("../../../img/" + product.img)

    return(
        <div className="productPage">
            <div className="productOverview">
                <img src={image.default}/>
                <div className="productInfo">
                    <h1>{product.name}</h1> 
                    <h2>&euro;{parseFloat(product.price).toFixed(2)}</h2>
                </div>
            </div>
            <div className="lineHor"></div>
            <div className="productDetails">
            <div className="detail">
                    <FiPackage className="icon"/>
                    <div className="lineVert"></div>
                    <h1>Stock: {product.stock}</h1>
                </div>
                <br/>
                <div className="detail">
                    <FaCalendarTimes className="icon"/>
                    <div className="lineVert"></div>
                    <h1>Next Expiry : {new Date(product.nextExpirationDate).toLocaleDateString()}</h1>
                </div>
                <div className="detail">
                    <FaTruck className="icon"/>
                    <div className="lineVert"></div>
                    <h1>Next Delivery : {new Date(product.nextDeliveryDate).toLocaleDateString()}</h1>
                </div>
            </div>
        </div>
    )
}

export default ProductPage