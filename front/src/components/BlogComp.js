import "../styles/BlogComp.css"
import image from "../assets/images/2.png"
import {useState} from "react";
import {useTranslation} from "react-i18next";

export default function BlogComp({img, title, short_text, long_text}) {
    const [shortActive, setShortActive] = useState(true)
    const {t} = useTranslation()
    function toggle() {
        setShortActive(!shortActive)
    }

    return (
        <div className="blog-container">
            <div className="blog-title">
                {title}
            </div>
            <div className="blog-main">
                <div className="blog-image">
                    <img src={img}/>
                </div>
                <div className="blog-text">
                    <div className="blog-short" style={shortActive ? {display: "block"} : {display: "none"}}>
                        {short_text}
                    </div>
                    <div className="blog-long" style={shortActive ? {display: "none"} : {display: "block"}}>
                        {long_text}
                    </div>
                </div>
            </div>
            <div className="blog-button">
                <button onClick={toggle}>{shortActive ? t("common:showMore") : t("common:showLess")}</button>
            </div>
        </div>
    )
}