import React from "react"
import "../styles/ForgotPass.css"

export default function ForgotPass (){
    return(
        <div className="forgot-wrapper">
            <form action="">
                <h2>პაროლის აღდგენა</h2>
                <hr/>
                <input type="email" className="box" placeholder="ელ.ფოსტა"/>
                <button>დადასტურება</button>
            </form>
        </div>
    )
}