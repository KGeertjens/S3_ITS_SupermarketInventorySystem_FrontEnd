import React from "react"
import { HashRouter } from "react-router-dom"

import ContentContainer from "./ContentContainer"
import Navbar from "./Navbar"
import Topbar from "./Topbar"

const App = () => {
    return(
        <div className="app">
            <HashRouter>
                <Topbar />
                <div className="main">
                    <Navbar />
                    <ContentContainer />
                </div>
            </HashRouter>
        </div>
    )
}

export default App