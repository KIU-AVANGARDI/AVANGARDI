import React from "react";
import "../styles/Footer.css"
import {faLocationDot,faPhone,faEnvelope} from "@fortawesome/free-solid-svg-icons"
import logo from '../logo1.svg'
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {  faFacebookF , faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer(props) {
    return(
        <div className="footer-container">
            <div className="row">

                <div className="col footer-logo">
                    <img src={logo}></img>
                </div>

                <div className="col ">
                    <h2> {props.lang==="en"?"Useful Links":"საჭირო ბმულები"}</h2>
                    <ul id="useful-links">
                        <li>
                            <p><a href="#">{props.lang==="en"?"More about website creators":"მეტი საიტის შემქმნელების შესახებ"}</a></p>
                        </li>
                        <li>
                            <p><a href="#">{props.lang==="en"?"collaborative companies":"თანამშრომელი კომპანიები"}</a></p>
                        </li>
                        <li>
                            <div id="fb" className="social-media">
                                <a target="_blank" href="https://www.facebook.com/"><FontAwesomeIcon  className="social-icon" icon={faFacebookF}/></a>
                            </div>

                            <div id="tw" className="social-media">
                                <a target="_blank" href="https://twitter.com/"><FontAwesomeIcon  className="social-icon" icon={faTwitter}/></a>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="col">
                    <h2>{props.lang==="en"?"Contact":"დაგვიკავშირდით"}</h2>
                    <ul>
                        <li>
                            <p> <FontAwesomeIcon icon={faLocationDot}/> {props.lang==="en"?"Youth Avenue, 5th Lane, K Building, Kutaisi,Georgia":"საქართველო , თბილისი , ფეიქართა ქ. 66"}</p>
                        </li>
                        <li>
                            <p><FontAwesomeIcon icon={faPhone}/> +995 595 333 050</p>
                        </li>
                        <li>
                            <p><FontAwesomeIcon icon={faEnvelope}/> <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTtbgPHJnGzbDxNKdNpWmHhdLjhKQWLQWGZtSFkjDWThQBKSZSgwqvcTnLXBhLVlLtkjvW">office@avangardi.com.ge</a></p>
                        </li>
                    </ul>

                </div>
            </div>

            <div className="sub-footer">
                <div>
                    <p>2022 avangardi.com ©    {props.lang==="en"?"All rights are reserved":"ყველა უფლება დაცულია"} </p>
                </div>
            </div>

        </div>
    )
}