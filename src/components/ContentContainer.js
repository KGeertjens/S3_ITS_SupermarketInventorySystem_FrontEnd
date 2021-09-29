import React from "react"
import { Route, Switch } from "react-router-dom"

import Home from "./pages/Home.js"
import Products from "./pages/Products.js"
import Deals from "./pages/Deals.js"
import NotFound from "./pages/NotFound.js"

const ContentContainer = () => {
    return(
        <div className="contentContainer">
            <Switch>
                <Route exact path="/S3_ITS_SupermarketInventorySystem_FrontEnd/">
                    <Home />
                </Route>
                <Route exact path="/S3_ITS_SupermarketInventorySystem_FrontEnd/products">
                    <Products />
                </Route>
                <Route exact path="/S3_ITS_SupermarketInventorySystem_FrontEnd/deals">
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
