import React from "react"
import { Route, Switch } from "react-router-dom"

import Home from "./pages/Home.js"
import Products from "./pages/Products.js"
import ProductPage from "./pages/productComponents/ProductPage"
import Deals from "./pages/Deals.js"
import NotFound from "./pages/NotFound.js"

const ContentContainer = () => {
    return(
        <div className="contentContainer">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/products">
                    <Products />
                </Route>
                <Route path ="/products/*">
                    <ProductPage />
                </Route>
                <Route exact path="/deals">
                    <Deals />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </div>
    )
}

export default ContentContainer
