import React, {useRef, useState} from "react"
import logo from "../logo.svg"
import "../styles/Navbar.css"


export default function Navbar (props){
    const [opened,setOpened] = useState(false)
    const navRef = useRef()
    function showLinks(){
        navRef.current.classList.toggle("show-nav")
    }

    return(
        <nav >
            <div className="logo-container">
                <img src={logo} alt={"logo"}/>
            </div>
            <div  ref={navRef} className="links-cont">
                <div className="links">
                    <ul>
                        <li><a href="/">მთავარი</a></li>
                        <li><a href="#">მაღაზია</a></li>
                        <li><a href="#">ვაკანსია</a></li>
                        <li><a href="#">ჩვენს შესახებ</a></li>
                    </ul>
                </div>
                <div className="login-button">
                    <button className="login">Log in</button>
                </div>
            </div>

            <div className={opened?'hamburger is-active':'hamburger'}
                 onClick={()=> {
                     setOpened(!opened)
                     showLinks()
                 }}>
                <span></span>
                <span></span>
                <span></span>
            </div>


        </nav>
    )
}
