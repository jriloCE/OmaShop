import React from 'react';
import { featuredproducts } from '../../../Resources/FeaturedProducts';
import { useCart } from '../Checkout/CartContext';

function FeaturedProducts() {
  const { addToCart } = useCart();

  return (
    <div className="mt-10">
      {/* Title Section */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Featured Product</h1>
        <div className="h-[3px] w-24 bg-[#FF496C] rounded" />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
        {featuredproducts.map((item) => (
          <div
            key={item.id}
            className="
              relative flex flex-col justify-between border border-gray-200
              rounded-lg bg-white shadow-sm p-4 h-full
              transition-transform hover:shadow-md
            "
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.description}
              className="w-full h-40 object-contain mb-4"
            />

            {/* Product Info */}
            <div className="flex-1 flex flex-col justify-between">
              <p className="text-gray-600 text-center text-sm line-clamp-2">
                {item.description}
              </p>

              <p className="text-xl font-bold text-black text-center mt-3">
                ₦ {item.price}
              </p>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={() => addToCart(item)}
              className=" 
                w-full mt-4 border border-[#FF496C] text-[#FF496C] text-sm font-semibold
                px-4 py-2 rounded-md transition duration-300 ease-in-out
                hover:bg-[#FF496C] hover:text-white hover:scale-[1.02]
              "
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
