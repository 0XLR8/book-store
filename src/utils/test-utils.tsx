import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { CartContext } from "../context/CartContext";
import { TypeCartItem } from "../types/types";
import { BrowserRouter } from "react-router";

type CartContextProps = {
    handleAddToCart?: jest.Mock;
    cartItems?: TypeCartItem[];
    isCartExpanded?: boolean;
    setIsCartExpanded?: jest.Mock;
    handleIncreaseCart?: jest.Mock;
    handleDecreaseCart?: jest.Mock;
    handleDeleteCart?: jest.Mock;
}

export const renderWithCartContext = (
    children: ReactNode,
    contextValues: CartContextProps = {}
) => {
    const defaultContext = {
        handleAddToCart: jest.fn(),
        cartItems: [],
        isCartExpanded: false,
        setIsCartExpanded: jest.fn(),
        handleIncreaseCart: jest.fn(),
        handleDecreaseCart: jest.fn(),
        handleDeleteCart: jest.fn(),
        ...contextValues
    };

    return render(
        <BrowserRouter>
            <CartContext.Provider value={defaultContext}>
                {children}
            </CartContext.Provider>
        </BrowserRouter>
    );
};
