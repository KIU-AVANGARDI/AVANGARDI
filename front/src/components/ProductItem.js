import '../styles/ProductItem.css';
import {useNavigate} from "react-router-dom";
import React from 'react';



const ProductItem = ({id, name, img, price}) => {

    let navigate = useNavigate();
    function showDetailsBtnClicked() {
        navigate(`/products/${id}`)
    }

    return (
        <div className="card-wrapper">
            <div className="gallery">
                <div className="content">
                    <img src={img} alt="Photo"/>
                    <p className="card-name">{name}</p>
                    <p className="card-price">{price} ₾</p>
                    <button className="buy-1" onClick={showDetailsBtnClicked}> დაწვრილებით </button>
                </div>
            </div>
        </div>
    );
};
export default ProductItem;
