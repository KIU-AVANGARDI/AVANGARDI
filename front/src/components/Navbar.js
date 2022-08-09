import React, { useState } from "react"
import logo from "../logo.svg"
import "../styles/Navbar.css"


export default function Navbar (props){
    const [opened,setOpened] = useState(false)
    return(
        <nav>
            <div className="logo-container">
                <img src={logo} alt={"logo"}/>
            </div>
            <div className={opened?'hamburger is-active':'hamburger'}
                 onClick={()=> setOpened(!opened)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="links">
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#">shop</a></li>
                    <li><a href="#">jobs</a></li>
                    <li><a href="#">about us</a></li>
                </ul>
            </div>
        </nav>
    )
}
