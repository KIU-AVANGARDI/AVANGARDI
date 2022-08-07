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
                        <h3>{name}</h3>
                        <h6>{price}</h6>
                        <button className="buy-1" onClick={showDetailsBtnClicked}>Show Details</button>
                </div>
            </div>
        </div>
    );
};
export default ProductItem;
