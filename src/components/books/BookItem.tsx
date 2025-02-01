import { useContext } from "react"
import { TypeBook } from "../../types/types";
import { CartContext } from "../../context/CartContext";


export const BookItem = ({id, title, author, price, imageUrl}: TypeBook) => {
    const {handleAddToCart} = useContext(CartContext);

    return (
        <div className="book-item p-3">
            <div className="d-flex align-items-center gap-3 mb-3">
                <img src={imageUrl} alt='book cover' />
                <div className="info">
                    <p className="title">{title}</p>
                    <p className="author">{author}</p>
                    <p>${price.toFixed(2)}</p>
                </div>
            </div>
            <button className="add-btn d-block mx-auto" onClick={() => handleAddToCart({id, title, author, price, imageUrl})}>Add to Cart</button>
        </div>
    )
}