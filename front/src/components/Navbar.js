import React, {useEffect, useRef, useState} from "react"
import logo from "../logo1.svg"
import {faArrowLeftLong, faArrowRightToBracket, faShoppingCart, faUser} from "@fortawesome/free-solid-svg-icons"
import "../styles/Navbar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useCookies} from "react-cookie";
import APIService from "../APIService";
import {useNavigate} from "react-router-dom";


export default function Navbar(props) {
    const [opened, setOpened] = useState(false)
    const [loginActive, setLoginActive] = useState(false)
    const [fullName, setFullName] = useState("")
    const [cookie, setCookie, removeCookie] = useCookies(
        ["user_id"],
        ["access_token"]
    );
    const navRef = useRef()

    let navigate = useNavigate()
    function logOut(){
        removeCookie("user_id")
        removeCookie("access_token")
        navigate('/')
    }

    function showLinks() {
        navRef.current.classList.toggle("show-nav")
    }

    useEffect(() => {
        APIService.GetUser(cookie["user_id"], cookie["access_token"])
            .then((resp) => {
            setFullName(resp.firstName)
            console.log(fullName)
        })
        // console.log(resp.then())
        console.log(fullName)
    }, [])

    useState(() => {
        //handles particularly login dropdown
        function handleClickOutside(e) {
            //get clicked element classnames
            let classes = []
            e.path.forEach((x) => {
                classes.push(x.className)
            })

            if (!classes.includes("login-wrapper")) {
                setLoginActive(false)
            }
        }

        document.body.addEventListener("click", handleClickOutside)
    })

    return (
        <nav>
            <div className="logo-container">
                <a href="/"><img src={logo} alt={"logo"}/></a>
            </div>
            <div ref={navRef} className="links-cont">
                <div className="links">
                    <ul>
                        <li><a href="/">მთავარი</a></li>
                        <li><a href="/shop">მაღაზია</a></li>
                        <li><a href="/vacancy">ვაკანსია</a></li>
                        <li><a href="/about-us">ჩვენს შესახებ</a></li>
                    </ul>
                </div>

                <div className="login-wrapper" hidden={cookie["user_id"]}>
                    <div className="login-button">
                        <button className="login" onClick={
                            () => {
                                setLoginActive(!loginActive)
                            }
                        }><FontAwesomeIcon icon={faArrowRightToBracket}/> &nbsp;&nbsp;შესვლა
                        </button>
                    </div>
                    <div className={loginActive?"login-dropdown active-login":"login-dropdown"}>
                        <a style={!loginActive?{pointerEvents:"none"}:{}} href="/authorization"><p>ავტორიზაცია</p></a>
                        <hr/>
                        <a style={!loginActive?{pointerEvents:"none"}:{}} href="/registration"><p>რეგისტრაცია</p></a>
                    </div>
                </div>
                <div className="login-wrapper" hidden={cookie["user_id"] === null || cookie["user_id"] === undefined}>
                    <div className="login-button">
                        <button className="login" onClick={
                            () => {
                                setLoginActive(!loginActive)
                            }
                        }><FontAwesomeIcon icon={faUser} /> &nbsp;&nbsp;{fullName}
                        </button>
                    </div>
                    <div className={loginActive ? "login-dropdown active-login" : "login-dropdown"}>
                        <a href="/cart"><p>ჩემი კალათა <FontAwesomeIcon icon={faShoppingCart}/></p></a>
                        <hr/>
                        <a onClick={logOut}><p>გასვლა <FontAwesomeIcon icon={faArrowLeftLong}/></p></a>
                    </div>
                </div>

            </div>

            <div className={opened ? 'hamburger is-active' : 'hamburger'}
                 onClick={() => {
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
