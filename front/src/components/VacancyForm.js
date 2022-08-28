import React, {useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import emailjs from '@emailjs/browser'
import {useNavigate} from 'react-router-dom';
import Alert from 'react-bootstrap/Alert'
import  {useTranslation} from "react-i18next";

export default function VacancyForm() {
    const {t} = useTranslation()
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
            } >{t("vacancyForm:fillTheForm")} {formIsOpen ? <FontAwesomeIcon icon={faAngleUp}/> : <FontAwesomeIcon icon={faAngleDown}/>}</button>

            <div className={formIsOpen?"vacancy-form show":"vacancy-form"}>
                <form  ref={form} onSubmit={handleSubmit}>
                    <div className="vacancy-inputs">
                        <label>
                            {t("vacancyForm:name")} <b>*</b>
                            <input type="text" name="name" onChange={handleChange}/>
                        </label>

                        <label>
                            {t("vacancyForm:lastname")} <b>*</b>
                            <input type="text" name="surname" onChange={handleChange}/>
                        </label>

                        <label>
                            {t("vacancyForm:email")}
                            <input type="email" name="email"/>
                        </label>

                        <label>
                            {t("vacancyForm:phone")} <b>*</b>
                            <input type="number" name="phone_number" onChange={handleChange}/>
                        </label>

                        <label>
                            {t("vacancyForm:birthdate")} <b>*</b>
                            <input type="date" name="birth_date" onChange={handleChange}/>
                        </label>

                        <label>
                            {t("vacancyForm:address")}
                            <input type="text" name="address"/>
                        </label>

                        <label>
                            {t("vacancyForm:experience")} <b>*</b>
                            <textarea  onChange={handleChange} name="experience" style={{height:'150px',resize:'none'}} placeholder="კომპანია; მუშაობის წლები; პირი ვინც გიგიწევთ რეკომენდაციას; რეკომენდატორის ტელეფონი; თვითდასაქმების შემთხვევაში მოგვაწოდეთ თქვენი პორტფოლიო office@avangardi.com.ge ზე (სახელი, გვარი, ნამუშევრის ორი ფოტოსურათი) და კლიენტის რეკომენდაცია."/>
                        </label>

                        <label>
                            {t("vacancyForm:additionalInfo")}
                            <textarea  name="additional_info" style={{height:'150px',resize:'none'}} placeholder="ვაკასიის/პოზიციის დასახელება რომლისთვისაც ავსებთ განაცხადს და თუ გსურთ მოგვაწოდოთ დამატებითი ინფორმაცია თქვენზე."/>
                        </label>

                        <label>
                            {t("vacancyForm:education")} <b>*</b>
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
                        <Alert key="danger" variant="danger"><b>{t("vacancyForm:warning")}</b></Alert>
                    }
                    <button type="submit">{t("vacancyForm:send")}</button>
                </form>
            </div>
        </div>
    )
}