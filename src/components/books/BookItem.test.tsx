import '@testing-library/jest-dom';
import { screen, fireEvent } from "@testing-library/react";
import { BookItem } from "./BookItem";
import { renderWithCartContext } from "../../utils/test-utils";
import { TypeBook } from "../../types/types";

describe('BookItem Component', () => {

    const mockhandleAddToCart = jest.fn();

    const mockBookItem: TypeBook = {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 10.9988,
        imageUrl: "https://example.com/gatsby.jpg"
    };

    const renderComponent = () => {
        renderWithCartContext(<BookItem {...mockBookItem} />, {handleAddToCart: mockhandleAddToCart});
    }

    it('should render a book item', () => {
        renderComponent();

        expect(screen.getByText(mockBookItem.title)).toBeInTheDocument();
        expect(screen.getByText(mockBookItem.author)).toBeInTheDocument();
        expect(screen.getByText(`$${mockBookItem.price.toFixed(2)}`)).toBeInTheDocument();
    })
    it('should add a book to the cart', () => {
        renderComponent();

        fireEvent.click(screen.getByText('Add to Cart'));

        expect(mockhandleAddToCart).toHaveBeenCalledTimes(1);
        expect(mockhandleAddToCart).toHaveBeenCalledWith(mockBookItem);
    })
})