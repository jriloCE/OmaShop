import React from 'react'
import Header from './PrimaryComponent/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './ui/Index/Index'
import Footer from './PrimaryComponent/Footer'
import Store from './ui/Store/Store'

function App() {
  return (
    <div>

        <BrowserRouter>
        
               <Header />

               <Routes>
              
                      <Route path="/" element={<Index />} />
                      {/* <Route path="/about" element={<h1>About</h1>} />   */}
                      <Route path="/shop" element={<Store />} />
                 
               </Routes>

               {/* <Footer /> */}
        
        </BrowserRouter>

    </div>
  )
}

export default App