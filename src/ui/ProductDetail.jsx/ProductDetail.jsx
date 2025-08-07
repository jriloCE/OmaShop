import React, { useState } from 'react'
import {
  Star,
  Truck,
  RotateCcw,
  Minus,
  Plus,
  ShoppingCart,
  Heart
} from 'lucide-react'

function ProductDetail() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('overview')

  const images = [
    'https://www-konga-com-res.cloudinary.com/w_500,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/N/a/64656_1515491694.jpg',
    'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500',
    'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500',
    'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500'
  ]

  return (
    <div className='bg-[#F5F5F5] min-h-screen px-4 py-10'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6'>
        {/* Product Details Section */}
        <div className='bg-white p-6 rounded-lg shadow grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Images */}
          <div>
            <div className='h-[300px] md:h-[450px] w-full rounded-lg overflow-hidden'>
              <img
                src={images[selectedImage]}
                alt='Product'
                className='h-full w-full object-contain'
              />
            </div>
            <div className='flex mt-4 space-x-2 overflow-x-auto'>
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  onClick={() => setSelectedImage(index)}
                  className={`h-16 w-16 object-cover rounded cursor-pointer border ${
                    selectedImage === index ? 'border-black' : 'border-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className='space-y-4'>
            <h1 className='text-2xl md:text-3xl font-bold text-gray-900'>Premium Cotton T-Shirt</h1>
            <p className='font-medium text-sm text-gray-700'>Brand: Oma’s Lux</p>

            {/* Rating */}
            <div className='flex items-center gap-2'>
              <div className='flex text-yellow-400'>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className='w-4 h-4 fill-current' />
                ))}
              </div>
              <span className='text-gray-600 text-sm'>(128 reviews)</span>
            </div>

            {/* Price */}
            <div className='border-t pt-4'>
              <span className='text-3xl font-bold text-gray-900'>$29.99</span>
              <div className='flex items-center gap-2 text-sm'>
                <span className='text-gray-500 line-through'>$39.99</span>
                <span className='bg-red-100 text-red-700 px-2 py-0.5 rounded'>25% OFF</span>
              </div>
            </div>

            {/* Description */}
            <p className='text-gray-700'>
              Premium quality cotton t-shirt with a comfortable fit. Perfect for casual wear and everyday comfort.
              Made from 100% organic cotton.
            </p>

            {/* Quantity */}
            <div className='border-t pt-4 flex items-center gap-4 flex-wrap'>
              <h3 className='font-semibold'>Quantity</h3>
              <div className='flex items-center border border-gray-300 rounded'>
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className='p-2'>
                  <Minus className='w-4 h-4' />
                </button>
                <span className='px-4 py-2'>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className='p-2'>
                  <Plus className='w-4 h-4' />
                </button>
              </div>
              <span className='text-red-600 text-sm'>In Stock</span>
            </div>

            {/* Actions */}
            <div className='flex gap-4 pt-4 flex-wrap'>
              <button className='flex-1 bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-200 flex items-center justify-center gap-2'>
                <ShoppingCart className='w-5 h-5' />
                Add to Cart
              </button>
              <button className='p-3 border border-gray-300 rounded-lg hover:bg-gray-100'>
                <Heart className='w-6 h-6' />
              </button>
            </div>

            {/* Additional Info */}
            <div className='border-t pt-6 space-y-2 text-sm text-gray-700'>
              <div className='flex justify-between'>
                <span>Free shipping</span>
                <span className='font-medium'>On orders over $50</span>
              </div>
              <div className='flex justify-between'>
                <span>Return policy</span>
                <span className='font-medium'>30 days return</span>
              </div>
              <div className='flex justify-between'>
                <span>Delivery</span>
                <span className='font-medium'>2-3 business days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Info Card */}
        <div className='bg-white p-6 rounded-lg shadow space-y-6'>
          <div>
            <h2 className='font-bold border-b pb-2'>Same Day Delivery Available in:</h2>
            <p className='mt-4 bg-[#FF496C] text-white text-sm font-semibold px-3 py-2 rounded-md w-fit'>
              Lagos
            </p>
            <p className='text-xs text-gray-500 mt-4'>
              *Orders placed before 2pm qualify.
              <br />
              *Terms and conditions apply.
            </p>
          </div>

          {/* Delivery Info */}
          <div className='flex items-start gap-3 border-t pt-4'>
            <Truck className='text-pink-500 mt-1' size={25} />
            <div>
              <h3 className='font-semibold'>Delivery</h3>
              <p>Estimated: 1–9 business days</p>
              <p className='mt-2'><strong>Same Day:</strong> order before 11AM</p>
              <p><strong>Next Day:</strong> order after 3PM</p>
              <p className='text-xs mt-1 text-gray-500'>*May vary by location</p>
            </div>
          </div>

          {/* Return Info */}
          <div className='flex items-start gap-3'>
            <RotateCcw className='text-[#FF496C] mt-1' size={25} />
            <div>
              <h3 className='font-semibold'>Return Policy</h3>
              <p className='font-semibold'>7-Day Guarantee</p>
              <p className='text-sm'>
                Read our full policy at{' '}
                <a href='#' className='text-[#FF496C] underline font-medium'>
                  Oma’s Lux Return Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className='mt-16 max-w-7xl mx-auto'>
        <div className='border-b border-gray-200'>
          <nav className='flex space-x-8 overflow-x-auto'>
            {['overview', 'description', 'warranty'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className='py-8 px-4 space-y-6'>
          {activeTab === 'overview' && (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700'>
              <div>
                <h4 className='font-medium mb-3'>Key Features</h4>
                <ul className='space-y-2'>
                  <li>• 100% Premium Cotton</li>
                  <li>• Comfortable Regular Fit</li>
                  <li>• Pre-shrunk Fabric</li>
                  <li>• Machine Washable</li>
                  <li>• Sustainable Manufacturing</li>
                </ul>
              </div>
              <div>
                <h4 className='font-medium mb-3'>Specifications</h4>
                <div className='space-y-2'>
                  <div className='flex justify-between'>
                    <span>Material:</span>
                    <span>100% Cotton</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Weight:</span>
                    <span>180 GSM</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Origin:</span>
                    <span>Made in USA</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Care:</span>
                    <span>Machine Wash Cold</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>SKU:</span>
                    <span>TSH-001</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'description' && (
            <div className='text-gray-700 space-y-4'>
              <h3 className='text-xl font-semibold'>Detailed Description</h3>
              <p>
                Our Premium Cotton T-Shirt offers the perfect blend of comfort, style, and sustainability.
                Made from 100% organic cotton, it’s soft, breathable, and designed for long-term wear.
              </p>
              <p>
                Pre-treated to reduce shrinkage, reinforced stitching, and tailored to a regular fit – this is a staple that lasts.
              </p>
              <h4 className='font-medium mt-4'>Care Instructions:</h4>
              <ul className='list-disc pl-5'>
                <li>Machine wash cold with like colors</li>
                <li>Use mild detergent, avoid bleach</li>
                <li>Tumble dry low or hang dry</li>
                <li>Iron on low if needed</li>
                <li>Do not dry clean</li>
              </ul>
            </div>
          )}

          {activeTab === 'warranty' && (
            <div className='text-gray-700 space-y-4'>
              <h3 className='text-xl font-semibold'>Warranty Information</h3>
              <p>
                We stand behind the quality of our t-shirts with a 6-month warranty covering manufacturing defects.
              </p>
              <p>
                30-day hassle-free return policy for unused items in original condition with tags attached.
              </p>
              <div className='bg-gray-100 p-4 rounded-lg'>
                <h4 className='font-medium mb-2'>Contact Us</h4>
                <p>Email: support@omashop.com</p>
                <p>Phone: 1-800-OMA-SHOP</p>
                <p>Hours: Mon–Fri, 9AM–6PM EST</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
