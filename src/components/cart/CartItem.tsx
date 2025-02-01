import { useContext } from "react";
import { TypeCartItem } from "../../types/types";
import { CartContext } from "../../context/CartContext";

export const CartItem = ({id, title, author, price, count, imageUrl}: TypeCartItem) => {
    const {handleIncreaseCart, handleDecreaseCart, handleDeleteCart} = useContext(CartContext);

    return(
        <div className="cart-item d-flex align-items-center gap-3">
            <img src={imageUrl} alt='cart item' />
            <div className="info">
                <p className="title">{title}</p>
                <p className="author">{author}</p>
                <p className="mb-2">{price.toFixed(2)} x {count}</p>
                <div className="d-flex align-items-center gap-2">
                    <button 
                        className="edit-cart"
                        onClick={() => handleDecreaseCart(id)}
                    ><i className="bi bi-dash-circle"></i></button>
                    <button 
                        className="edit-cart"
                        onClick={() => handleIncreaseCart(id)}    
                    ><i className="bi bi-plus-circle"></i></button>
                     <button 
                        className="edit-cart"
                        onClick={() => handleDeleteCart(id)}    
                    ><i className="bi bi-trash3"></i></button>
                </div>
            </div>
        </div>
    )
}