import React, {useRef, useState} from "react"
import logo from "../logo1.svg"
import {faArrowRightToBracket} from "@fortawesome/free-solid-svg-icons"
import "../styles/Navbar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default function Navbar (props){
    const [opened,setOpened] = useState(false)
    const [loginActive,setLoginActive] = useState(false)
    const navRef = useRef()
    function showLinks(){
        navRef.current.classList.toggle("show-nav")
    }

    return(
        <nav >
            <div className="logo-container">
                <a href="/"><img src={logo} alt={"logo"}/></a>
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

                <div className="login-wrapper">
                    <div className="login-button">
                        <button className="login" onClick={
                            ()=>{
                                setLoginActive(!loginActive)
                            }
                        }><FontAwesomeIcon icon={faArrowRightToBracket}/> &nbsp;&nbsp;შესვლა</button>
                    </div>
                    <div className={loginActive?"login-dropdown active-login":"login-dropdown"}>
                        <a href="/authorization"><p>ავტორიზაცია</p></a>
                        <hr/>
                        <a href="/registration"><p>რეგისტრაცია</p></a>
                    </div>
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
