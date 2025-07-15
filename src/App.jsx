import React from 'react';
import Header from './PrimaryComponent/Header';
import { Route, Routes } from 'react-router-dom';
import Index from './ui/Index/Index';
import Footer from './PrimaryComponent/Footer';
import Shop from './ui/Shop/Shop';
import About from './ui/About/About';
import Contact from './ui/Contact/Contact';
import { CartProvider } from './ui/Checkout/CartContext';
import CartPage from './ui/Checkout/CartPage';
import CheckoutPage from './ui/Checkout/CheckoutPage';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <CartProvider>
      <div>
        <Header />
        
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/cart" element={<CartPage />} />
          <Route path='checkout' element={<CheckoutPage />}/>
        </Routes>
          <Toaster position="botton-left" />

        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
