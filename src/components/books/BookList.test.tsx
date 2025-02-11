import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { TypeBook } from "../../types/types";
import { BookList } from './BookList';

describe('BookList Component', () => {
    const mockBookList: TypeBook[] = [{
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 10.9988,
        imageUrl: "https://example.com/gatsby.jpg"
    },{
        id: 2,
        title: "Moby",
        author: "Herman Melville",
        price: 15.99,
        imageUrl: "https://example.com/moby.jpg"
    }];

    const renderComponent = () => {
        render(<BookList bookList={mockBookList} />);
    }

    it('should render a book list', () => {
        renderComponent();

        mockBookList.forEach(book => {
            expect(screen.getByText(book.title)).toBeInTheDocument();
            expect(screen.getByText(book.author)).toBeInTheDocument();
            expect(screen.getByText(`$${book.price.toFixed(2)}`)).toBeInTheDocument();
        })
    })
})