import { BrowserRouter, Routes, Route } from "react-router"
import { Navigation } from "./components/navigation/Navigation"
import { BooksPage } from "./pages/BooksPage"
import { CartProvider } from "./context/CartContext"
import { CartExpanded } from "./components/cart/CartExpanded"
import { UserProfilePage } from "./pages/UserProfilePage"
import { UserProvider } from "./context/UserContext"


export const App = () => {
    return(
        <div className="main container px-3">
            <UserProvider>
                <BrowserRouter>
                    <CartProvider>
                        <Navigation />
                        <div className="cart-container">
                            <Routes>
                                <Route path="/" element={<BooksPage />} />
                                <Route path="/profile" element={<UserProfilePage />} />
                            </Routes>
                            <CartExpanded />
                        </div>
                    </CartProvider>
                </BrowserRouter>
            </UserProvider>
        </div>
    )
}