import '../styles/ProductItem.css';
import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import APIService from "../APIService";
import {ErrorPage} from "./Errorpage";



const ProductItem = () => {
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
            <div className="card-wrapper">
                <div className="gallery">
                    <div className="content">
                        <img src={item.image} alt="Photo"/>
                        <p className="card-name">{item.name}</p>
                        <p className="card-price">{item.price} ₾</p>
                    </div>
                </div>
            </div>
        );
    }
    else if(type === "material") {
        return (
            <div className="card-wrapper">
                <div className="gallery">
                    <div className="content">
                        <img src={item.image} alt="Photo"/>
                        <p className="card-name">{item.name}</p>
                        <p className="card-price">{item.price_square_meter} ₾</p>
                    </div>
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
