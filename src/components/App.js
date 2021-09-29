import React from "react"
import { BrowserRouter } from "react-router-dom"

import ContentContainer from "./ContentContainer"
import Navbar from "./Navbar"
import Topbar from "./Topbar"

const App = () => {
    return(
        <div className="app">
            <BrowserRouter>
                <Topbar />
                <div className="main">
                    <Navbar />
                    <ContentContainer />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App