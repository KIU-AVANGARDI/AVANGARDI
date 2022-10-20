import React, {useState} from "react";
import "../styles/AboutUs.css"
import img from "../assets/images/aboutUs.jpg"
import {useTranslation} from "react-i18next";




export default function AboutUs(){
    const {t} = useTranslation()
    return(
        <div className="vacancy-wrapper">

            <div className="vacancy-img">
                <img src={img}/>
                <div className="vacancy-img-overlay">
                    <div className="hiring">
                        {t("aboutus:title")}
                    </div>
                </div>
            </div>

            <div className="vacancy-info">


                <p>
                    {t("aboutus:t")}</p>
                <h2>{t("aboutus:h1")}</h2>
                <p>
                    {t("aboutus:t1")}</p>

                <h2>{t("aboutus:h2")}</h2>
                <p>
                    {t("aboutus:t2")}</p>

                <h2>{t("aboutus:h3")}</h2>

                <p>
                    {t("aboutus:t3")}</p>

                <p>
                    {t("aboutus:t4")}
                </p>

                <h4>{t("aboutus:h5")}</h4>
                <ul>
                    <li>{t("aboutus:f1")}</li>
                    <li>{t("aboutus:f2")}</li>
                    <li>{t("aboutus:f3")}</li>

                </ul>




            </div>
        </div>
    )
}