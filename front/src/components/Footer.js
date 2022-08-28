import React from "react";
import "../styles/Footer.css"
import {faLocationDot,faPhone,faEnvelope} from "@fortawesome/free-solid-svg-icons"
import logo1 from "../logo1.svg";
import logo from '../logo.svg'
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {  faFacebookF ,faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import  {useTranslation} from "react-i18next";


export default function Footer() {
    const {t} = useTranslation()
    return(
        <div className="footer-container">
            <div className="row">

                <div className="col footer-logo">
                    <img src={localStorage.getItem("lng")==="en"?logo:logo1}></img>
                </div>

                <div className="col ">
                    <h2>{t("common:usefulLinks")}</h2>
                    <ul id="useful-links">
                        <li>
                            <p><a href="#">მეტი საიტის შემქმნელების შესახებ</a></p>
                        </li>
                        <li>
                            <p><a href="#">თანამშრომელი კომპანიები</a></p>
                        </li>
                        <li>
                            <div id="fb" className="social-media">
                                <a target="_blank" href="https://www.facebook.com/Avangardi"><FontAwesomeIcon  className="social-icon" icon={faFacebookF}/></a>
                            </div>

                            <div id="li" className="social-media">
                                <a target="_blank" href="https://www.linkedin.com/"><FontAwesomeIcon  className="social-icon" icon={faLinkedinIn}/></a>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="col">
                    <h2>{t("common:contact")}</h2>
                    <ul>
                        <li>
                            <p> <FontAwesomeIcon icon={faLocationDot}/>  {t("common:address")}</p>
                        </li>
                        <li>
                            <p><FontAwesomeIcon icon={faPhone}/> +995 595 333 050</p>
                        </li>
                        <li>
                            <p><FontAwesomeIcon icon={faEnvelope}/> <a target="_blank">office@avangardi.com.ge</a></p>
                        </li>
                    </ul>

                </div>
            </div>

            <div className="sub-footer">
                <div>
                    <p> © 2022 avangardi.com.ge</p>
                </div>
            </div>

        </div>
    )
}