import React from "react"
import "../styles/Authorization.css"

export default function Authorization (){
    return(
        <div className="auth-wrapper">
            <form action="">

                <h2>ავტორიზაცია</h2>
                <hr/>
                <input type="email" className="box" placeholder="ელ.ფოსტა"/>
                <input type="password" className="box" placeholder="პაროლი"/>
                <button type="submit">შესვლა</button>
                <p>დაგავიწყდა პაროლი?<a href="/forgotPass">დააჭირე აქ</a></p>
            </form>
        </div>
    )
}