import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is currently empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 bg-white shadow rounded-lg p-4"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img
                    src={item.image}
                    alt={item.description}
                    className="w-24 h-24 object-cover rounded-md border  border-gray-200"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.description}</h3>
                    <p className="text-gray-500 text-sm mt-1">
                      Price: ₦{Number(item.price).toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    −
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>

                <div className="text-right sm:text-left">
                  <p className="font-bold text-lg">
                    {(Number(item.price) * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-500 hover:underline mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="bg-white shadow rounded-lg p-6 sticky top-20 h-fit">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Shipping</span>
                <span className="text-sm text-gray-400">Calculated at checkout</span>
              </div>
              <div className="border-t pt-4 mt-4 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <a
              href="/checkout"
              className="block w-full text-center mt-6 bg-[#ff496c] text-white py-3 rounded hover:bg-green-700 transition"
            >
              Proceed to Checkout
            </a>

            <a
              href="/"
              className="block w-full text-center mt-3 text-[#ff496c] hover:underline"
            >
              ← Continue Shopping
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
