import React from 'react'
import Intro from './Intro'
import Newarrival from './Newarrival'
import Topsales from './Topsales'
import FeaturedProducts from './FeaturedProducts'

function Index() {
  return (
    <div className='px-8 lg:px-18'>
           
            <Intro />
              
                <Newarrival />

                <Topsales />

                <FeaturedProducts />

    </div>
  )
}

export default Index