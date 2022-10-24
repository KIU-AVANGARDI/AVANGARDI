import React, {useEffect, useState} from "react";
import "../styles/CartItem.css"
import {faTrashCan, faMoneyBill1Wave} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {useTranslation} from "react-i18next";
import image from "../assets/images/2.png"
import APIService from "../APIService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";


export default function CartItem({id, type, pairId}) {
    //quantity and setQuantity should also be added
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")


    const notify = () => {
        toast.info('პროდუქტი წარმატებით წაიშალა', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    useEffect(() => {
        if (type === "kitchen") {
            APIService.GetKitchen(id).then((resp) => {
                setName(localStorage.getItem("lng") === "en" ? resp.name_en : resp.name_ge)
                setImage(resp.image)
                setPrice(resp.price)
            })
        }
        if (type === "material") {
            APIService.GetMaterial(id).then((resp) => {
                setName(localStorage.getItem("lng") === "en" ? resp.name_en : resp.name_ge)
                setImage(resp.image)
                setPrice(resp.price_square_meter)
            })
        }
    }, [])
    const {t} = useTranslation()
    const [quantity, setQuantity] = useState(1)
    const PRICE = price

    function removeItem() {

    }

    function updateQuantity(val) {
        if (!(val === -1 && quantity === 1)) {
            setQuantity(quantity + val)
        }

    }

    return (
        <div className="cart-item-container">
            <div className="cart-item-info">
                <div className="cart-item-image">
                    <img src={image}/>
                </div>
                <div className="cart-item-name">
                    <h4>{name}</h4>
                </div>

            </div>

            <div className="cart-item-quantity">
                <div className="single-item-quantity-container">
                    <p>{t("productPage:quantity")}</p>
                    <div className="single-item-quantity">
                        <button onClick={() => updateQuantity(-1)}>-</button>
                        <p>{quantity}</p>
                        <button onClick={() => updateQuantity(1)}>+</button>
                    </div>
                </div>

                <div className="cart-whole-price" style={{padding: "10px"}}>
                    სრული ფასი: <span style={{color: "#e29f4f", fontFamily: "gilory"}}>{PRICE * quantity} ₾</span>
                </div>
            </div>
            <div className="cart-item-buttons">
                <button className="remove" onClick={() => {
                    APIService.DeleteCartItem(
                    pairId).then((resp) => console.log(resp))
                    notify()
                    navigate(0)
                }}><FontAwesomeIcon icon={faTrashCan}/> წაშლა</button>
                <button className="checkout"><FontAwesomeIcon icon={faMoneyBill1Wave}/> ყიდვა</button>
            </div>

            <ToastContainer
                theme="light"
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}