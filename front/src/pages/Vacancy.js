import React from "react";
import "../styles/Vacancy.css"
import img from "../assets/images/vacancy.png"
import VacancyForm from "../components/VacancyForm";
import {useTranslation} from "react-i18next";

export default function Vacancy(){
    const {t} = useTranslation()
    return(
        <div className="vacancy-wrapper">

            <div className="vacancy-img">
                <img src={img}/>
                <div className="vacancy-img-overlay">
                    <div className="hiring">
                        {t("vacancy:title")}
                    </div>
                </div>
            </div>

            <div className="vacancy-info">
                <h1>{t("vacancy:h1")}</h1>
                <p>
                    {t("vacancy:t1")}</p>

                <h2>{t("vacancy:h2")}</h2>
                <ul>
                    <li>{t("vacancy:f21")}</li>
                    <li>{t("vacancy:f22")}</li>
                    <li>{t("vacancy:f23")}</li>
                    <li>{t("vacancy:f24")}</li>
                    <li>{t("vacancy:f25")}</li>
                </ul>

                <h2>{t("vacancy:h3")}</h2>
                <ul>
                    <li>{t("vacancy:f31")}</li>
                    <li>{t("vacancy:f32")}</li>
                </ul>

                <h2>{t("vacancy:h4")}</h2>
                <ul>
                    <li>{t("vacancy:f41")}</li>
                    <li>{t("vacancy:f42")}</li>
                </ul>

                <h2>{t("vacancy:h5")}</h2>
                <ul>
                    <li>{t("vacancy:f51")}</li>
                    <li>{t("vacancy:f52")}</li>
                    <li>{t("vacancy:f53")}</li>
                </ul>
                <br/>
                <p>{t("vacancy:t6")}</p>
                <br/>
                <p style={{color:'red'}}>{t("vacancy:t7")}</p>

                <VacancyForm/>

            </div>
        </div>
    )
}

