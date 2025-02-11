import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { Navigation } from './Navigation';
import { renderWithCartContext } from '../../utils/test-utils';
import { ReactNode } from 'react';

describe('Navigation Component', () => {
    const mockCartItems = [{ id: 1, title: 'Book', author: '', price: 10, imageUrl: '', count: 1 }]

    const renderComponent = () => {renderWithCartContext(<Navigation />)};

    it('should render the navigation component', () => {
        renderComponent();

        expect(screen.getByText('Books')).toBeInTheDocument();
        expect(screen.getByText('My profile')).toBeInTheDocument();
    });

    it('should render the cart button with the empty cart icon when there are no cart items', () => {
        const { container } = renderWithCartContext(<Navigation />);
        
        const button = container.querySelector('.cart-btn');
        expect(button).toContainHTML('<i class="bi bi-basket3"></i>');
    });

    it('should render the cart button with the filled cart icon when there are cart items', () => {
        const mockContextValue = {
            cartItems: mockCartItems,
        };

        const {container} = renderWithCartContext(<Navigation />, mockContextValue);
        
        const button = container.querySelector('.cart-btn');
        expect(button).toContainHTML('<i class="bi bi-basket2"></i>'); 
    });

    it('should call setIsCartExpanded when the cart button is clicked and the cart is not empty', () => {
        const mockContextValue = {
            cartItems: mockCartItems,
            setIsCartExpanded: jest.fn()
        };

        const {container} = renderWithCartContext(<Navigation />, mockContextValue);
        
        const button = container.querySelector('.cart-btn');
        fireEvent.click(button as Node);
        
        expect(mockContextValue.setIsCartExpanded).toHaveBeenCalledTimes(1);
        expect(mockContextValue.setIsCartExpanded).toHaveBeenCalledWith(true);
    });

    it('should not call setIsCartExpanded when the cart button is clicked and the cart is empty', () => {
        const mockContextValue = {
            cartItems: [],
            setIsCartExpanded: jest.fn()
        };

        const {container} = renderWithCartContext(<Navigation />, mockContextValue);
        
        const button = container.querySelector('.cart-btn');
        fireEvent.click(button as Node);
        
        expect(mockContextValue.setIsCartExpanded).not.toHaveBeenCalled();
    });
});