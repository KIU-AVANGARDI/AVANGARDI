import '../styles/ProductPage.css';
import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import APIService from "../APIService";
import {ErrorPage} from "./Errorpage";
import {useCookies} from "react-cookie";


const ProductItem = () => {
    const [cookie, setCookie, removeCookie] = useCookies(["user_id"])
    const params = useParams()
    const type = params["type"]
    const id = params["id"]
    const [item, setItem] = useState("")
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

    console.log(item)

    if(type === "kitchen") {
        return (
            <div className="single-item-box">
                <div className="single-main-box">
                    <div className="single-half">
                        <img src={item.image} alt=""/>
                    </div>
                    <div className="single-half">
                        <div className="single-title">
                            <h2>{item.name}</h2>
                        </div>
                        <div className="single-buttons">
                            <button id="single-price">{item.price}₾</button>
                            <button id="single-cart" onClick={() => {
                                APIService.AddCartItem({
                                        "user_id": parseInt(cookie["user_id"]),
                                        "product_id": parseInt(id),
                                    }
                                ).then((resp) => console.log(resp))
                            }}>Add to cart
                            </button>
                        </div>
                    </div>
                </div>
                <ul>
                    <li>{item.category}</li>
                </ul>
                <p className="single-description">{item.note}</p>
                <div className="additional-info">
                    <p>ფასი: ჯასჯკას</p>
                    <p>ფასი: ჯასჯკას</p>
                    <p>ფასი: ჯასჯკას</p>
                    <p>ფასი: ჯასჯკას</p>
                </div>
            </div>
        );
    }
    else if(type === "material") {
        return (
            <div className="single-item-box">
                <div className="single-main-box">
                    <div className="single-half">
                        <img src={item.image} alt=""/>
                    </div>
                    <div className="single-half">
                        <div className="single-title">
                            <h2>{item.name}</h2>
                        </div>
                        <div className="single-buttons">
                            <button id="single-price">{item.price_square_meter}₾</button>
                            <button id="single-cart" onClick={() => {
                                APIService.AddCartItem({
                                        "user_id": parseInt(cookie["user_id"]),
                                        "product_id": parseInt(id),
                                    }
                                ).then((resp) => console.log(resp))
                            }}>Add to cart
                            </button>
                        </div>
                    </div>
                </div>
                <ul>
                    <li>{item.category}</li>
                </ul>
                <p className="single-description">{item.note}</p>
                <div className="additional-info">
                    <p>ფასი: ჯასჯკას</p>
                    <p>ფასი: ჯასჯკას</p>
                    <p>ფასი: ჯასჯკას</p>
                    <p>ფასი: ჯასჯკას</p>
                </div>
            </div>
        );
    }
    else{
        return (
            <ErrorPage/>
        )
    }
};
export default ProductItem;
