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
import SignupForm from './ui/SignUpForm/SignupForm';
import LoginForm from './ui/SignUpForm/LoginForm';
import ProductDetail from './ui/ProductDetail.jsx/ProductDetail.jsx';



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
          <Route path="/product/:source/:id" element={<ProductDetail />} />
          <Route path="/register" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
        
        </Routes>


            <Toaster
              position="bottom-right"
              gutter={12}
              containerStyle={{ margin: '1rem' }}
              toastOptions={{
                className: '',
                style: {
                  border: 'none',
                  padding: '16px',
                  color: '#fff',
                  background: '#ff496c',
                  borderRadius: '12px',
                  width: 'fit-content',
                },
                duration: 3000,
                success: {
                  iconTheme: {
                    primary: '#fff',
                    secondary: '#0f1419',
                  },
                },
              }}
            />



        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
