import React from 'react'
import Header from './PrimaryComponent/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './ui/Index/Index'
import Footer from './PrimaryComponent/Footer'
import Shop from './ui/Shop/Shop'
import About from './ui/About/About'
import Contact from './ui/Contact/Contact'

function App() {
  return (
    <div>

        <BrowserRouter>
        
               <Header />

               <Routes>
              
                      <Route path="/" element={<Index />} />
                      <Route path="/about" element={<About />} />  
                      <Route path="/shop" element={<Shop />} />
                      <Route path="/contact" element={<Contact />} />
                 
               </Routes>

               <Footer />
        
        </BrowserRouter>

    </div>
  )
}

export default App