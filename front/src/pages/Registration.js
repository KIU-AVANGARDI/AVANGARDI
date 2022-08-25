import "../styles/Registration.css"

import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import APIService from "../APIService";

export default function Registration(){

    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [personalNumber, setPersonalNumber] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [cookie, setCookie, removeCookie] = useCookies(
        ["user_id"],
        ["access_token"]
    );

    const register = async () => {
        const resp = await APIService.RegisterUser({name, email, mobileNumber, personalNumber, password, confirmPassword})
        if (resp.status === 200 || resp.status === 201) {
            const resp1 = await APIService.LoginUser({email, password})
            setCookie("user_id", resp1.data.user_id)
            setCookie("access_token", resp1.data.access)
            navigate("/")
        } else {
        }
    }


    return(
        <div className="reg-wrapper">
            <form action="">

                <h2>რეგისტრაცია</h2>
                <hr/>
                <input value = {name} onChange={(e) => setName(e.target.value)} type="text"  placeholder="სახელი გვარი"/>
                <input value = {personalNumber} onChange={(e) => setPersonalNumber(e.target.value)} type="number"  placeholder="პირადი ნომერი"/>
                <input value = {mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} type="number"  placeholder="ტელეფონის ნომერი"/>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type="email"  placeholder="ელ.ფოსტა"/>
                <input value = {password} onChange={(e) => setPassword(e.target.value)} type="password"  placeholder="პაროლი"/>
                <input value = {confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password"  placeholder="გაიმეორეთ პაროლი"/>
                <button onClick={(e) => {
                    e.preventDefault()
                    register()
                }}>რეგისტრაცია</button>
            </form>
        </div>
    )
}