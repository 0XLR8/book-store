import { useContext, useEffect, useRef } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "./CartItem";

export const CartExpanded = () => {
    const { cartItems, isCartExpanded, setIsCartExpanded } = useContext(CartContext);
    const cartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!cartItems.length) {
            setIsCartExpanded(false);
        }
    }, [cartItems]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                cartRef.current &&
                !cartRef.current.contains(event.target as Node) &&
                !document.querySelector(".cart-btn")?.contains(event.target as Node) 
            ) {
                setIsCartExpanded(false);
            }
        };

        if (isCartExpanded) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isCartExpanded]);

    const totalPrice = cartItems.reduce((prev, current) => prev + current.price * current.count, 0).toFixed(2);

    const handleSubmit = () => {
        alert("Your books are on the way!");
    };

    return (
        <div ref={cartRef} className={`cart-expanded ${isCartExpanded ? "active" : ""}`}>
            {cartItems.map((item) => (
                <CartItem
                    key={item.id}
                    title={item.title}
                    author={item.author}
                    count={item.count}
                    price={item.price}
                    imageUrl={item.imageUrl}
                    id={item.id}
                />
            ))}
            <div className="cart-footer">
                <button className="submit-btn" onClick={handleSubmit}>
                    Buy now for ${totalPrice}
                </button>
            </div>
        </div>
    );
};
