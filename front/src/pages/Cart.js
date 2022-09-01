import "../styles/Cart.css"
import CartItem from "../components/CartItem";
import {useCookies} from "react-cookie";
import {useEffect, useState} from "react";
import APIService from "../APIService";

export const Cart = () => {
    const [cookie, setCookie, removeCookie] = useCookies(["user_id"])
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        APIService.GetCartItems(cookie["user_id"]).then((resp) => {
            setCartItems(resp.map((x) => [x.product_id,x.product_type,x.id]))
        })
    }, [])
    return(
        <div className="cart-container">
            {
                cartItems.map((x) =>
                    <CartItem id={x[0]} type={x[1]} pairId={x[2]}/>
                )
            }
        </div>
    )
}