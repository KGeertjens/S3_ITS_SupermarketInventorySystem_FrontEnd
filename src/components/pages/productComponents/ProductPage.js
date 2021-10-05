import React, { useState, useEffect } from "react"
import axios from "axios"

const ProductPage = () => {
    //Determine product ID
    const baseURL = "http://localhost:8080/products/"
    let splitString = window.location.href.split("/")
    let productID = splitString[splitString.length-1]
    let URL = baseURL + productID
    
    const [product, setProduct] = useState(null)

    //Load product
    useEffect(() => {
        axios.get(URL).then((response) => {
            setProduct(response.data)
            console.log(response.data)
        })
    }, [])

    //Product with invalid ID
    if (!product) return(
        <div className="productPage">
            <h1>Product not found</h1>
        </div>
    )

    //Finding product image
    const image = require("../../../img/" + product.img)

    //Getting deal info
    let price = <h2 className="price">&euro;{parseFloat(product.price).toFixed(2)}</h2>

    let dealDescription = <h2>"No Deal"</h2>
    if(product.deal != null){
        dealDescription = <div className="dealDescription">
                            <h2>{product.deal.description}</h2>
                        </div>
        price = <div>
                    <h2 className="oldPrice">&euro;{parseFloat(product.productDealPriceDTO.originalPrice).toFixed(2)}</h2>
                    <h2 className="dealPrice">&euro;{parseFloat(product.productDealPriceDTO.dealPrice).toFixed(2)}</h2>
                </div>
    }


    


    return(
        <div className="productPage">
            <div className="productOverview">
                <img src={image.default}/>
                <div className="productInfo">
                    <h1>{product.name}</h1> 
                    {price}
                </div>
            </div>
            <div className="lineHor"></div>

            <div className="productPageBottom">
                <div className="productDetails">
                    <h1>Details</h1>
                    <div className="lineHor"></div>
                    <table>
                        <tbody>
                            <tr>
                                <td><b>Stock</b></td>    
                                <td>{product.stock}</td>    
                            </tr>
                        </tbody>
                    </table>

                    <br/>

                    
                    <table>
                        <tbody>
                            <tr>
                                <td><b>Next Delivery</b></td>    
                                <td>{new Date(product.nextDeliveryDate).toLocaleDateString()}</td>    
                            </tr>
                            <tr>
                                <td><b>Next Expiry</b></td>    
                                <td>{new Date(product.nextExpirationDate).toLocaleDateString()}</td>    
                            </tr>
                        </tbody>
                    </table>
                    
                </div>

                
                <div className="productDeal">
                    <h1>Deal</h1>
                    <div className="lineHor"></div>
                    {dealDescription}
                </div>


            </div>
        </div>
    )
}

export default ProductPage