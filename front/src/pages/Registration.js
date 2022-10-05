import "../styles/Registration.css"
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import APIService from "../APIService";
import {useTranslation} from "react-i18next";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Registration() {
    const {t} = useTranslation()
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [personalNumber, setPersonalNumber] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [regSucc, setRegSucc] = useState(false)
    const [cookie, setCookie, removeCookie] = useCookies(
        ["user_id"],
        ["access_token"]
    );

    const notify = () => {
        toast.error(t("common:registrationError"), {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const register = async () => {
        const resp = await APIService.RegisterUser({
            name,
            email,
            mobileNumber,
            personalNumber,
            password,
            confirmPassword
        })
        if (resp.status === 200 || resp.status === 201) {
            const resp1 = await APIService.LoginUser({email, password})
            setCookie("user_id", resp1.data.user_id)
            setCookie("access_token", resp1.data.access)
            navigate("/")
            setRegSucc(true)
        } else {
        }
    }


    return (
        <div className="reg-wrapper">
            <form action="">

                <h2>{t("reg:reg")}</h2>
                <hr/>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text"
                       placeholder={t("reg:firstLast")}/>
                <input value={personalNumber} onChange={(e) => setPersonalNumber(e.target.value)} type="number"
                       placeholder={t("reg:id")}/>
                <input value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} type="number"
                       placeholder={t("reg:phone")}/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"
                       placeholder={t("reg:email")}/>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password"
                       placeholder={t("reg:password")}/>
                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password"
                       placeholder={t("reg:rePassword")}/>
                <button onClick={(e) => {
                    e.preventDefault()
                    register()
                    if(!regSucc)notify()

                }}>{t("reg:register")}</button>
            </form>
            <ToastContainer
                theme="light"
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}