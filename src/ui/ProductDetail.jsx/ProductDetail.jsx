import { useState, useEffect } from "react";
import { useCart } from "../Checkout/CartContext";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [selectedImage, setSelectedImage] = useState('');
  
  useEffect(() => {
    // Fetch product data based on productId
    const fetchProduct = async () => {
      try {
        // Replace this with your actual API call
        // For now, using a mock product
        const mockProduct = {
          id: productId,
          name: "Sample Product",
          price: 19999,
          images: ["/path/to/image1.jpg", "/path/to/image2.jpg"],
          description: "This is a sample product description.",
          shortDescription: "Sample product short description.",
          specifications: {
            "Brand": "Sample Brand",
            "Model": "Sample Model",
            "Color": "Black"
          },
          highlights: ["Feature 1", "Feature 2", "Feature 3"],
          faq: ["Delivery within 3-5 business days", "30-day return policy"]
        };
        
        setProduct(mockProduct);
        setSelectedImage(mockProduct.images[0]);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProduct();
  }, [productId]);
  
  // Show loading state
  if (loading) {
    return <div className="max-w-7xl mx-auto px-4 py-6">Loading product details...</div>;
  }
  
  // Handle case when product is undefined
  if (!product) {
    return <div className="max-w-7xl mx-auto px-4 py-6">Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Image Gallery and Tabs */}
        <div className="lg:col-span-2">
          {/* Main Image */}
          <div className="border rounded-lg overflow-hidden">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-[300px] sm:h-[400px] object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="flex mt-3 gap-2 overflow-x-auto">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                onClick={() => setSelectedImage(img)}
                className={`w-16 h-16 object-cover rounded border cursor-pointer ${
                  selectedImage === img ? "ring-2 ring-[#ff496c]" : ""
                }`}
              />
            ))}
          </div>

          {/* Tabs */}
          <div className="mt-6">
            <div className="flex overflow-x-auto border-b">
              {["description", "specs", "delivery"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-4 text-sm font-semibold capitalize whitespace-nowrap border-b-2 ${
                    activeTab === tab
                      ? "border-[#ff496c] text-[#ff496c]"
                      : "border-transparent text-gray-600"
                  }`}
                >
                  {tab === "specs"
                    ? "Specifications"
                    : tab === "delivery"
                    ? "Delivery & Payment"
                    : "Product Description"}
                </button>
              ))}
            </div>

            <div className="mt-4 text-sm text-gray-700">
              {activeTab === "description" && (
                <p className="whitespace-pre-line">{product.description}</p>
              )}

              {activeTab === "specs" && product.specifications && (
                <table className="w-full border text-sm text-gray-800">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, val]) => (
                      <tr key={key} className="border-t">
                        <td className="py-2 px-2 font-medium w-1/3">{key}</td>
                        <td className="py-2 px-2">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}

              {activeTab === "delivery" && product.faq && (
                <ul className="list-disc list-inside space-y-1">
                  {product.faq.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Buy Box */}
        <div className="bg-white border rounded-lg p-5 shadow h-fit sticky top-20 space-y-4">
          <h1 className="text-lg sm:text-xl font-semibold">{product.name}</h1>
          <p className="text-2xl font-bold text-[#ff496c]">₦{product.price.toLocaleString()}</p>
          <p className="text-sm text-gray-600">{product.shortDescription}</p>

          {/* Highlights */}
          {product.highlights && (
            <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
              {product.highlights.map((hl, i) => (
                <li key={i}>{hl}</li>
              ))}
            </ul>
          )}

          {/* Quantity Selector */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-8 h-8 bg-gray-200 rounded"
            >
              −
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-8 h-8 bg-gray-200 rounded"
            >
              +
            </button>
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(product, quantity)}
            className="w-full bg-[#ff496c] text-white py-2 rounded-lg hover:bg-[#e6405b] transition"
          >
            Add to Cart
          </button>

          <p className="text-xs text-gray-500">
            Fast & free delivery • 7‑day returns
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
