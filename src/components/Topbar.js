import React from "react"
import { FiBox } from "react-icons/fi"

const Topbar = () => {
    return(
        <div className="header">
            <FiBox className="icon"/>
            <h1>Inventory</h1>
        </div>
    )
}

export default Topbar