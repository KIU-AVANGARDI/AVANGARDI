import React from "react"
import "../styles/Authorization.css"
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useCookies} from "react-cookie";
import APIService from "../APIService";
import {useTranslation} from "react-i18next";

export default function Authorization (){
    const {t} = useTranslation()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cookie, setCookie, removeCookie] = useCookies(
        ["user_id"],
        ["access_token"]
    );

    const login = async () => {
        const resp = await APIService.LoginUser({email, password})
        if (resp.status === 200 || resp.status === 201) {
            setCookie("user_id", resp.data.user_id)
            setCookie("access_token", resp.data.access)
            navigate("/")
        } else {
        }
    }
    return(
        <div className="auth-wrapper">
            <form action="">

                <h2>{t("auth:auth")}</h2>
                <hr/>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type="email" className="box" placeholder={t("auth:email")}/>
                <input value = {password} onChange={(e) => setPassword(e.target.value)} type="password" className="box" placeholder={t("auth:password")}/>
                <button type="submit" onClick={(e) => {
                    e.preventDefault()
                    login()
                }}>{t("auth:login")}</button>
                <p>{t("auth:forgot")}<a href="/forgot-pass">{t("auth:click")}</a></p>
            </form>
        </div>
    )
}