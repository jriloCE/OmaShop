import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Billing Details */}
        <div className="lg:col-span-2 bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-6">Billing Information</h2>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="input-style" required />
              <input type="text" placeholder="Last Name" className="input-style" required />
            </div>

            <input type="email" placeholder="Email Address" className="input-style" required />
            <input type="text" placeholder="Phone Number" className="input-style" required />
            <input type="text" placeholder="Street Address" className="input-style" required />
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="City" className="input-style" required />
              <input type="text" placeholder="Zip Code" className="input-style" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Country" className="input-style" required />
              <input type="text" placeholder="State/Province" className="input-style" required />
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff496c] text-white py-3 rounded hover:bg-green-700 transition"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded shadow-md h-fit">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
          <div className="divide-y divide-gray-200">
            {cart.map((item) => (
              <div key={item.id} className="py-3 flex justify-between">
                <div>
                  <p className="font-medium">{item.description.slice(0, 40)}...</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
                <p className="font-medium text-gray-700">
                   ₦{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t pt-4 text-lg font-bold text-right">
            Total: ₦{total.toFixed(2)}
          </div>

          <Link
            to="/cart"
            className="block mt-4 text-[#ff496c] underline text-sm hover:text-green-700 text-center"
          >
            ← Back to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
