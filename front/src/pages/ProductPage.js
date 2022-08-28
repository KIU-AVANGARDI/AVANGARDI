import '../styles/ProductPage.css';
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import APIService from "../APIService";
import {useCookies} from "react-cookie";
import {faMagnifyingGlass,faXmark,faCheckCircle,faCartShopping} from "@fortawesome/free-solid-svg-icons"
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {useTranslation} from "react-i18next";

const ProductItem = () => {
    const {t} = useTranslation()
    const [cookie, setCookie, removeCookie] = useCookies(["user_id"])
    const params = useParams()
    const type = params["type"]
    const id = params["id"]
    const [item, setItem] = useState("")
    const [zoomed,setZoomed] = useState(false)
    const [quantity,setQuantity] = useState(1)


    function updateQuantity(value){
        if(!(value === -1 && quantity===1)){
            setQuantity(quantity+value)
        }
    }

    useEffect(() => {
        if(type === "kitchen"){
            APIService.GetKitchen(id).then((resp) => {
                setItem(resp);
            })
        }
        if(type === "material"){
            APIService.GetMaterial(id).then((resp) => {
                setItem(resp);
            })
        }
    }, [])
    const price = type === "kitchen" ? item.price:item.price_square_meter
    console.log(item)


    return (
        <>
            <div className="single-item-box-container">
                <div className="single-item-box">

                    <div className="single-item-images">
                        <div className="single-item-big-image">
                            <div onClick={
                                ()=>{setZoomed(true)}
                            }>
                                <FontAwesomeIcon id="magnifyingGlass" icon={faMagnifyingGlass}/>
                            </div>
                            <img src={item.image} />
                        </div>
                    </div>
                    <div className="single-item-details">
                        <h4>{item.name}</h4>
                        <hr/>
                        <div className="single-item-category">
                            <p>{t("productPage:category")}</p>
                            <div>{item.category}</div>
                        </div>
                        <br/>
                        <div className="single-item-quantity-container">
                            <p>{t("productPage:quantity")}</p>
                            <div className="single-item-quantity">
                                <button onClick={()=>updateQuantity(-1)}>-</button>
                                <p>{quantity}</p>
                                <button onClick={()=>updateQuantity(1)}>+</button>
                            </div>
                        </div>
                        <hr/>

                        <div className="single-item-note">
                            {item.note}
                        </div>
                    </div>

                    <div className="single-item-buttons-container">
                        <div className="single-item-buttons">
                            <div className="in-stock">
                                <h4><FontAwesomeIcon icon={faCheckCircle}/> {t("productPage:inStock")}</h4>
                            </div>
                            <hr/>
                            <div className="single-item-price">
                                <h4>{t("productPage:price")} <span style={{color:"#e29f4f",fontFamily:"gilory"}}>{price} ₾</span></h4>
                            </div>
                            <hr/>
                            <div className="single-add-to-cart">
                                <button><FontAwesomeIcon icon={faCartShopping}/> {t("productPage:addToCart")}</button>

                                <h4>{t("productPage:fullPrice")}<span style={{color:"#e29f4f",fontFamily:"gilory"}}> {price*quantity} ₾</span></h4>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {zoomed && <div className="single-zoom-img-overlay" >
                <div onClick={
                    ()=>{setZoomed(false)}
                }><FontAwesomeIcon id="xMark" icon={faXmark}/></div>
                <img src={item.image}/>
            </div>}
        </>
    );

};
export default ProductItem;
