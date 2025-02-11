import '@testing-library/jest-dom';
import { fireEvent, render, screen } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

describe('SearchBar Component', () => {
    const mockSetSearchText = jest.fn();
    const mockValue = 'Test Book';

    const renderSearchBar = (value: string) => {
        render(<SearchBar searchText={value} setSearchText={mockSetSearchText} />);
    }

    it('should render a search bar', () => {
        renderSearchBar(''); 

        const inputElement = screen.getByPlaceholderText(/search a book by title or author/i);
        expect(inputElement).toBeInTheDocument();
    })

    it('should update the search text', () => {
        renderSearchBar(mockValue);

        const inputElement = screen.getByPlaceholderText(/search a book by title or author/i);
        expect(inputElement).toHaveValue(mockValue);
    })

    it('should call setSearchText on change', () => {
        renderSearchBar('');

        const inputElement = screen.getByPlaceholderText(/search a book by title or author/i);
        fireEvent.change(inputElement, { target: { value: mockValue } });

        expect(mockSetSearchText).toHaveBeenCalledWith(mockValue);
    })
})