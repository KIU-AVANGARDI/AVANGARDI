import React, {useEffect, useRef, useState} from "react"
import logo1 from "../logo1.svg"
import logo from "../logo.svg"
import {faArrowLeftLong, faArrowRightToBracket, faShoppingCart, faUser, faGlobe} from "@fortawesome/free-solid-svg-icons"
import "../styles/Navbar.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useCookies} from "react-cookie";
import APIService from "../APIService";
import {useNavigate} from "react-router-dom";
import ge from "../assets/images/ge.svg"
import gb from "../assets/images/gb.svg"
import  {useTranslation} from "react-i18next";


export default function Navbar(props) {
    const {t,i18n} = useTranslation()
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

    function handleFlagClick(ln) {
        i18n.changeLanguage(ln)
        localStorage.setItem("lng",ln)
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
            <div className="language-changer">
                <img src={ge} onClick={()=>{handleFlagClick("ge")}}/>
                <img src={gb} onClick={()=>{handleFlagClick("en")}} />
                <FontAwesomeIcon id="globe" icon={faGlobe} />
            </div>

            <div className="logo-container">
                <a href="/"><img src={localStorage.getItem("lng")==="en"?logo:logo1} alt={"logo"}/></a>
            </div>
            <div ref={navRef} className="links-cont">
                <div className="links">
                    <ul>
                        <li><a href="/">{t("common:home")}</a></li>
                        <li><a href="/shop">{t("common:shop")}</a></li>
                        <li><a href="/vacancy">{t("common:vacancy")}</a></li>
                        <li><a href="/contact">{t("common:contact")}</a></li>
                        <li><a href="/about-us">{t("common:aboutUs")}</a></li>
                    </ul>
                </div>

                <div className="login-wrapper" hidden={cookie["user_id"]}>
                    <div className="login-button">
                        <button className="login" onClick={
                            () => {
                                setLoginActive(!loginActive)
                            }
                        }><FontAwesomeIcon icon={faArrowRightToBracket}/> &nbsp;&nbsp;{t("common:login")}
                        </button>
                    </div>
                    <div className={loginActive?"login-dropdown active-login":"login-dropdown"}>
                        <a style={!loginActive?{pointerEvents:"none"}:{}} href="/authorization"><p>{t("common:authorization")}</p></a>
                        <hr/>
                        <a style={!loginActive?{pointerEvents:"none"}:{}} href="/registration"><p>{t("common:registration")}</p></a>
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
                        <a style={!loginActive?{pointerEvents:"none"}:{}} href="/cart"><p>{t("common:myCart")} <FontAwesomeIcon icon={faShoppingCart}/></p></a>
                        <hr/>
                        <a style={!loginActive?{pointerEvents:"none"}:{}} onClick={logOut}><p>{t("common:logOut")} <FontAwesomeIcon icon={faArrowLeftLong}/></p></a>
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
