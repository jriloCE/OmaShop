import React from 'react'
import Header from './PrimaryComponent/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './ui/Index/Index'

function App() {
  return (
    <div>

        <BrowserRouter>
        
               <Header />

               <Routes>
              
                      <Route path="/" element={<Index />} />
                      {/* <Route path="/about" element={<h1>About</h1>} />   */}
                 
               </Routes>

               <Footer />
        
        </BrowserRouter>

    </div>
  )
}

export default App