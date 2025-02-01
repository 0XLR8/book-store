import { BrowserRouter, Routes, Route } from "react-router"
import { Navigation } from "./components/navigation/Navigation"
import { BooksRoute } from "./pages/BooksPage"
import { CartProvider } from "./context/CartContext"
import { CartExpanded } from "./components/cart/CartExpanded"


export const App = () => {
    return(
        <div className="main container px-3">
            <BrowserRouter>
                <CartProvider>
                    <Navigation />
                    <div className="cart-container">
                        <Routes>
                            <Route path="/" element={<BooksRoute />} />
                        </Routes>
                        <CartExpanded />
                    </div>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
}