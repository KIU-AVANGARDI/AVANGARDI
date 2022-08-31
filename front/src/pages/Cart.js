import "../styles/Cart.css"
import CartItem from "../components/CartItem";

export const Cart = () => {
    const arr = [1,2,3,4,5]
    return(
        <div className="cart-container">
            {arr.map(()=>{
                return <CartItem/>
            })}
        </div>
    )
}