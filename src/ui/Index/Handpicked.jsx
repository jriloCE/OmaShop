import React from 'react'

function Handpicked() {
  return (
    <div>

            <div className="min-h-[90vh] bg-[#F9F9F9] flex flex-col-reverse lg:flex-row items-center justify-center px-6 py-12 space-y-10 lg:space-y-0 lg:space-x-12">
            {/* Text Section */}
            <div className="text-center lg:text-left">
                <p className="text-sm text-[#FF496C] uppercase tracking-wide">Deal of the day</p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
                    Shop Your Flower <br />
                  <span className="text-green-700">Best Offer - $12</span>
                </h1>
            </div>
     
            <div className="h-64 sm:h-80 md:h-[70vh] w-full sm:w-[400px] md:w-[500px] lg:w-[700px] bg-gold rounded-lg shadow-md">
         
            </div>
            </div>
    </div>
  )
}

export default Handpicked