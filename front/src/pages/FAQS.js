import Accordion from 'react-bootstrap/Accordion';
import '../styles/FAQ.css'
import img from "../assets/images/faq.jpg";
import React from "react";
import {useEffect, useState} from "react";
import APIService from "../APIService";
import {useTranslation} from "react-i18next";


export default function FAQS(){
    const {t} = useTranslation()
    const [faqs, setFaqs] = useState([])
    useEffect(() => {
        APIService.GetFAQS().then((resp) => {
            setFaqs(resp);
        })
    }, [])


    return(
        <div>
            <div className="vacancy-img">
                <img src={img}/>
                <div className="vacancy-img-overlay">
                    <div className="hiring">
                        {t("common:faq")}
                    </div>
                </div>
            </div>
            <div className="faq-container">
                <Accordion style={{width:'80%',display:'block'}}>
                {faqs.map((p) => (
                    <Accordion.Item eventKey={p.id}>
                        {/*<FAQ question={localStorage.getItem("lng") === "en" ? p.question_en : p.question_ge} answer={localStorage.getItem("lng") === "en" ? p.answer_en : p.answer_ge}/>*/}
                        <Accordion.Header>{localStorage.getItem("lng") === "en" ? p.question_en : p.question_ge}</Accordion.Header>
                        <Accordion.Body>
                            {localStorage.getItem("lng") === "en" ? p.answer_en : p.answer_ge}
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
                </Accordion>
            </div>
        </div>

    )
}