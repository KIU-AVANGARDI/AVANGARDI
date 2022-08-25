import React, {useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import emailjs from '@emailjs/browser'


export default function VacancyForm() {
    const [formIsOpen,setFormIsOpen] = useState(false)
    const form = useRef()

    function sendEmail(e){
        // e.preventDefault();

        emailjs.sendForm('service_3yikqfr', 'template_oac9bh2', form.current, 'FRIsamLFqUFPF1bl3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return(
        <div className="vacancy-form-wrapper">
            <button onClick={
                ()=>{
                    setFormIsOpen(!formIsOpen)
                }
            } >შეავსე ფორმა {formIsOpen ? <FontAwesomeIcon icon={faAngleUp}/> : <FontAwesomeIcon icon={faAngleDown}/>}</button>

            <div className={formIsOpen?"vacancy-form show":"vacancy-form"}>
                <form action="/" ref={form} onSubmit={sendEmail}>
                    <div className="vacancy-inputs">
                        <label>
                            სახელი *
                            <input type="text" name="name"/>
                        </label>

                        <label>
                            გვარი *
                            <input type="text" name="surname"/>
                        </label>

                        <label>
                            ელ.ფოსტა
                            <input type="email" name="email"/>
                        </label>

                        <label>
                            ტელეფონი *
                            <input type="number" name="phone_number"/>
                        </label>

                        <label>
                            დაბადების თარიღი *
                            <input type="date" name="birth_date"/>
                        </label>

                        <label>
                            მისამართი
                            <input type="text" name="address"/>
                        </label>

                        <label>
                            სამუშაო გამოცდილება *
                            <textarea  name="experience" style={{height:'150px',resize:'none'}} placeholder="კომპანია; მუშაობის წლები; პირი ვინც გიგიწევთ რეკომენდაციას; რეკომენდატორის ტელეფონი; თვითდასაქმების შემთხვევაში მოგვაწოდეთ თქვენი პორტფოლიო office@avangardi.com.ge ზე (სახელი, გვარი, ნამუშევრის ორი ფოტოსურათი) და კლიენტის რეკომენდაცია."/>
                        </label>

                        <label>
                            დამატებითი ინფორმაცია
                            <textarea  name="additional_info" style={{height:'150px',resize:'none'}} placeholder="ვაკასიის/პოზიციის დასახელება რომლისთვისაც ავსებთ განაცხადს და თუ გსურთ მოგვაწოდოთ დამატებითი ინფორმაცია თქვენზე."/>
                        </label>

                        <label>
                            განათლება *
                            <select name="education" >
                                <option value="საშუალო">საშუალო</option>
                                <option value="პროფესიული">პროფესიული</option>
                                <option value="უმაღლესი">უმაღლესი</option>
                            </select>
                        </label>
                    </div>
                    <button type="submit">გაგზავნა</button>
                </form>
            </div>
        </div>
    )
}