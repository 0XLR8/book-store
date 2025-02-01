import { Link } from 'react-router';
import Logo from '../../assets/bookstore.png';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const Navigation = () => {
    const {cartItems, isCartExpanded, setIsCartExpanded} = useContext(CartContext);

    const handleCartClick = () => {
        if(!Boolean(cartItems.length)){
            return;
        }

        setIsCartExpanded(!isCartExpanded)
    }

    return(
        <div className="navigation mb-4 p-sm-4 p-2 d-flex justify-content-between align-items-center">
            <img src={Logo} alt='logo' /> 
            <div className='links d-flex align-items-center gap-3 gap-sm-5'>
                <Link to='/'>Books</Link>
                <Link to='/profile'>My profile</Link>
                <button className='cart-btn' onClick={handleCartClick}>
                    {
                        Boolean(cartItems.length) ? <i className="bi bi-basket2"></i> : <i className="bi bi-basket3"></i>
                    }
                </button>
            </div>       
        </div>
    )
}