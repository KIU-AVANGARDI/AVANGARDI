import React, {useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import emailjs from '@emailjs/browser'
import {useNavigate} from 'react-router-dom';
import Alert from 'react-bootstrap/Alert'

export default function VacancyForm() {
    const [formIsOpen,setFormIsOpen] = useState(false)
    const form = useRef()
    const navigate = useNavigate()
    const [error,setError] = useState(false)
    const [inputState,setInputState] = useState({
        name: false,
        surname: false,
        phone_number: false,
        birth_date: false,
        experience: false,
        education: false
    })

    function sendEmail(e){
        // e.preventDefault();

        emailjs.sendForm('service_3yikqfr', 'template_oac9bh2', form.current, 'FRIsamLFqUFPF1bl3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }).then(()=>{
                navigate("/")
        });
    }

    function handleChange(e){
        inputState[e.target.name] = e.target.value !== "" || e.target.value !== null;
    }

    function handleSubmit(e){
        e.preventDefault()
        let temp = false
        Object.values(inputState).forEach(val => {
            temp = temp || !val

        });
        setError(temp)
        if (!temp)
            sendEmail()
    }

    return(
        <div className="vacancy-form-wrapper">
            <button onClick={
                ()=>{
                    setFormIsOpen(!formIsOpen)
                }
            } >შეავსე ფორმა {formIsOpen ? <FontAwesomeIcon icon={faAngleUp}/> : <FontAwesomeIcon icon={faAngleDown}/>}</button>

            <div className={formIsOpen?"vacancy-form show":"vacancy-form"}>
                <form  ref={form} onSubmit={handleSubmit}>
                    <div className="vacancy-inputs">
                        <label>
                            სახელი <b>*</b>
                            <input type="text" name="name" onChange={handleChange}/>
                        </label>

                        <label>
                            გვარი <b>*</b>
                            <input type="text" name="surname" onChange={handleChange}/>
                        </label>

                        <label>
                            ელ.ფოსტა
                            <input type="email" name="email"/>
                        </label>

                        <label>
                            ტელეფონი <b>*</b>
                            <input type="number" name="phone_number" onChange={handleChange}/>
                        </label>

                        <label>
                            დაბადების თარიღი <b>*</b>
                            <input type="date" name="birth_date" onChange={handleChange}/>
                        </label>

                        <label>
                            მისამართი
                            <input type="text" name="address"/>
                        </label>

                        <label>
                            სამუშაო გამოცდილება <b>*</b>
                            <textarea  onChange={handleChange} name="experience" style={{height:'150px',resize:'none'}} placeholder="კომპანია; მუშაობის წლები; პირი ვინც გიგიწევთ რეკომენდაციას; რეკომენდატორის ტელეფონი; თვითდასაქმების შემთხვევაში მოგვაწოდეთ თქვენი პორტფოლიო office@avangardi.com.ge ზე (სახელი, გვარი, ნამუშევრის ორი ფოტოსურათი) და კლიენტის რეკომენდაცია."/>
                        </label>

                        <label>
                            დამატებითი ინფორმაცია
                            <textarea  name="additional_info" style={{height:'150px',resize:'none'}} placeholder="ვაკასიის/პოზიციის დასახელება რომლისთვისაც ავსებთ განაცხადს და თუ გსურთ მოგვაწოდოთ დამატებითი ინფორმაცია თქვენზე."/>
                        </label>

                        <label>
                            განათლება <b>*</b>
                            <select name="education" onChange={handleChange} >
                                <option hidden selected></option>
                                <option value="საშუალო">საშუალო</option>
                                <option value="პროფესიული">პროფესიული</option>
                                <option value="უმაღლესი">უმაღლესი</option>
                            </select>
                        </label>
                    </div>
                    <br/>
                    {error&&
                        <Alert key="danger" variant="danger"><b>გთხოვთ შეავსოთ ყველა საჭირო ველი</b></Alert>
                    }
                    <button type="submit">გაგზავნა</button>
                </form>
            </div>
        </div>
    )
}