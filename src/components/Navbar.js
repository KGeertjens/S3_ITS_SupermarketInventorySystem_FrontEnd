import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    const links = [
        {
            id: 1,
            path: "/S3_ITS_SupermarketInventorySystem_FrontEnd/",
            text: "Home",
        },
        {
            id: 2,
            path: "/S3_ITS_SupermarketInventorySystem_FrontEnd/products",
            text: "Products",
        },
        {
            id: 3,
            path: "/S3_ITS_SupermarketInventorySystem_FrontEnd/deals",
            text: "Deals",
        },
    ]

    return(
        <div className="navbar">
            {links.map((link) => (
                <NavLink className="navlink" activeClassName="navlinkActive" to={link.path} key={link.id} exact>{link.text}</NavLink>
            ))}
        </div>
    )
}

export default Navbar