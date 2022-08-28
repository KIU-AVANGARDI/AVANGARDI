import React from "react"
import "../styles/ForgotPass.css"
import {useTranslation} from "react-i18next";

export default function ForgotPass (){
    const {t} = useTranslation()
    return(
        <div className="forgot-wrapper">
            <form action="">
                <h2>{t("forgot:recovery")}</h2>
                <hr/>
                <input type="email" className="box" placeholder={t("forgot:email")}/>
                <button>{t("forgot:submit")}</button>
            </form>
        </div>
    )
}