import React from "react";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

const AddToCartButton = ({ product, className = "" }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart(product);
    toast.success(`${product.name || product.description} added to cart!`);
  };

  return (
    <button
      onClick={handleAdd}
      className={` w-full mt-4 border border-[#FF496C] text-[#FF496C] text-sm font-semibold
            px-4 py-2 rounded-md transition duration-300 ease-in-out
            hover:bg-[#FF496C] hover:text-white hover:scale-[1.02] ${className}`}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
