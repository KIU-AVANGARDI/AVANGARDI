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
            <div className="product-image">
                <img src={img} alt="Photo"/>
            </div>
            <p className="card-name" >{name}</p>
            <p className="card-price">{price} ₾</p>
            <button className="details" onClick={showDetailsBtnClicked}> დაწვრილებით </button>
        </div>
    );
};
export default ProductItem;
