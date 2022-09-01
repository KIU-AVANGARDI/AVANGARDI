import React, {useRef} from "react";
import "../styles/Contact.css"
import {useTranslation} from "react-i18next";
import Alert from "react-bootstrap/Alert";
import emailjs from "@emailjs/browser";
import {useNavigate} from "react-router-dom";
import img from "../assets/images/vacancy.png";


export default function Contact() {
    const {t} = useTranslation()
    const form = useRef()
    const navigate = useNavigate()

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_3yikqfr', 'template_qjrztsk', form.current, 'FRIsamLFqUFPF1bl3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            }).then(() => {
            navigate("/")
        });
    }

    return (
        <div className="contact-container">
            <div className="vacancy-img">
                <img src={img}/>
                <div className="vacancy-img-overlay">
                    <div className="hiring">
                        {t("contact:contact")}
                    </div>
                </div>
            </div>
            <div className="contact">

                <div className="contact-info-container">
                    <div className="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.057848503953!2d44.78996792088323!3d41.78396692258439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446d94620cdd85%3A0x6b9c00b1ca0f96e9!2z4YOQ4YOV4YOQ4YOc4YOS4YOQ4YOg4YOT4YOY!5e0!3m2!1ska!2sge!4v1661538286393!5m2!1ska!2sge"
                            width="400"
                            height="400"
                            style={{border: "0"}}

                            loading="lazy"

                        ></iframe>
                    </div>
                    <div className="contact-info">
                        <h4>{t("contact:whereToBuy")}</h4>
                        <br/>
                        <p>{t("contact:addresses")}</p>
                        <ul>
                            <li>{t("contact:addr1")}</li>
                            <br></br>
                            <li>{t("contact:addr2")}</li>
                            <br></br>
                            <li>{t("contact:addr3")}</li>
                            <br></br>
                            <li>{t("contact:addr4")}</li>
                        </ul>
                    </div>
                </div>

                <div className="contact-form">
                    <h4>{t("contact:contact")}</h4>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="contact-inputs">
                            <input type="text" name="nameSurname" placeholder={t("contact:firstLast")}/>
                            <input type="email" name="email" placeholder={t("contact:email")}/>
                            <input type="text" name="subject" placeholder={t("contact:subject")}/>
                            <textarea name="text" style={{height: '150px', resize: 'none'}}
                                      placeholder={t("contact:text")}/>
                        </div>
                        <button type="submit">{t("vacancyForm:send")}</button>
                    </form>
                </div>

            </div>
        </div>


    );
}


        
