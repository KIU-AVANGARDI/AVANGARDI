import "../styles/Registration.css"

import React from "react";

export default function Registration(){
    return(
        <div className="reg-wrapper">
            <form action="">

                <h2>რეგისტრაცია</h2>
                <hr/>
                <input type="text"  placeholder="სახელი"/>
                <input type="text"  placeholder="გვარი"/>
                <input type="number"  placeholder="პირადი ნომერი"/>
                <input type="number"  placeholder="ტელეფონის ნომერი"/>
                <input type="email"  placeholder="ელ.ფოსტა"/>
                <input type="password"  placeholder="პაროლი"/>
                <input type="password"  placeholder="გაიმეორე პაროლი"/>
                <button>რეგისტრაცია</button>
            </form>
        </div>
    )
}