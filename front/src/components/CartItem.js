import React, {useState} from "react";
import "../styles/CartItem.css"
import {faTrashCan,faMoneyBill1Wave} from "@fortawesome/free-solid-svg-icons"
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {useTranslation} from "react-i18next";
import image from "../assets/images/2.png"

export default function CartItem({id,name,img,price,setCart}){
    //quantity and setQuantity should also be added

    const {t} = useTranslation()
    const [quantity,setQuantity] = useState(1)
    const PRICE = 300
    function removeItem(){
        //TODO
    }

    function updateQuantity(val){
        if(!(val === -1 && quantity===1)){
            setQuantity(quantity+val)
        }
        //TODO
    }
    return(
        <div className="cart-item-container" >
            <div className="cart-item-info">
                <div className="cart-item-image">
                    <img src={image}/>
                </div>
                <div className="cart-item-name">
                    <h4>ძალიან კარგი პროდუქტი</h4>
                </div>

            </div>

            <div className="cart-item-quantity">
                <div className="single-item-quantity-container">
                    <p>{t("productPage:quantity")}</p>
                    <div className="single-item-quantity">
                        <button onClick={()=>updateQuantity(-1)}>-</button>
                        <p>{quantity}</p>
                        <button onClick={()=>updateQuantity(1)}>+</button>
                    </div>
                </div>

                <div className="cart-whole-price" style={{padding:"10px"}}>
                    სრული ფასი: <span style={{color:"#e29f4f",fontFamily:"gilory"}}>{PRICE * quantity} ₾</span>
                </div>
            </div>
            <div className="cart-item-buttons">
                <button className="remove"><FontAwesomeIcon icon={faTrashCan}/> წაშლა</button>
                <button className="checkout"><FontAwesomeIcon icon={faMoneyBill1Wave}/> გადახდა</button>
            </div>



        </div>
    )
}