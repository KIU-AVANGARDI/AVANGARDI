import BlogComp from "../components/BlogComp";
import React, {useEffect, useState} from "react";
import APIService from "../APIService";
import Accordion from "react-bootstrap/Accordion";

export default function Blog(){
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        APIService.GetBlogs().then((resp) => {
            setBlogs(resp);
        })
    }, [])
    return(
        <div style={{display:'flex',flexDirection:'column',padding:'20px',alignItems:'center'}}>
            {blogs.map((p) => (
                <BlogComp title={localStorage.getItem("lng") === "en" ? p.title_en : p.title_ge} img={p.image} short_text={localStorage.getItem("lng") === "en" ? p.short_text_en : p.short_text_ge} long_text={localStorage.getItem("lng") === "en" ? p.long_text_en : p.long_text_ge}/>
            ))}
        </div>
    )
}