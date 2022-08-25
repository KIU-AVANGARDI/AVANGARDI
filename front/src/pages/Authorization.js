import React from "react"
import "../styles/Authorization.css"
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useCookies} from "react-cookie";
import APIService from "../APIService";

export default function Authorization (){

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

                <h2>ავტორიზაცია</h2>
                <hr/>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type="email" className="box" placeholder="ელ.ფოსტა"/>
                <input value = {password} onChange={(e) => setPassword(e.target.value)} type="password" className="box" placeholder="პაროლი"/>
                <button type="submit" onClick={(e) => {
                    e.preventDefault()
                    login()
                }}>შესვლა</button>
                <p>დაგავიწყდა პაროლი?<a href="/forgot-pass">დააჭირე აქ</a></p>
            </form>
        </div>
    )
}