import { useState } from "react";
import { CheckCircle, Plus, Minus } from "lucide-react";

export default function Dummy1() {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("black");

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Shop Details</h2>

      <div className="grid md:grid-cols-2 gap-3">
        <div className="bg-gray-50 p-6 rounded-md">
        </div>

        <div>
          <div className="flex items-start justify-between">
            <h3 className="text-2xl font-bold text-gray-900 leading-snug">
              True Wireless Noise Cancelling Headphone
            </h3>
            <span className="bg-blue-500 text-white text-md px-3 py-1 rounded-md font-semibold mt-1">
              30% OFF
            </span>
          </div>

          <div className="flex items-center mt-2 space-x-2 text-sm text-gray-500">
            <span>⭐ 0 customer reviews</span>
            <CheckCircle size={16} className="text-green-600" />
            <span className="text-green-600">In Stock</span>
          </div>

          <div className="mt-4 text-lg">
            Price: <span className="font-bold text-black">$899</span>{" "}
            <span className="line-through text-gray-400">$930</span>
          </div>

          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2">✅ Free delivery available</li>
            <li className="flex items-center gap-2">
              ✅ Sales 30% Off Use Code: <span className="font-semibold">PROMO30</span>
            </li>
            <li className="flex items-center gap-2">✅ test</li>
          </ul>

          <hr className="my-4" />

          <div className="mb-4">
            <span className="font-medium">Color: </span>
            <button
              onClick={() => setColor("black")}
              className={`w-5 h-5 rounded-full mr-2 border-2 ${
                color === "black" ? "border-black" : "border-gray-300"
              } bg-black`}
            ></button>
            <button
              onClick={() => setColor("blue")}
              className={`w-5 h-5 rounded-full border-2 ${
                color === "blue" ? "border-black" : "border-gray-300"
              } bg-blue-600`}
            ></button>
          </div>

          <hr className="my-4" />

          {/* Quantity and Actions */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-md overflow-hidden">
              <button
                onClick={decreaseQuantity}
                className="px-3 py-2 text-lg text-gray-700 hover:bg-gray-200"
              >
                <Minus size={16} />
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-5 py-2 text-lg text-gray-700 hover:bg-gray-200"
              >
                <Plus size={16} />
              </button>
            </div>

            <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 font-medium">
              Purchase Now
            </button>
            <button className="bg-gray-900 text-white px-5 py-2 rounded-md hover:bg-gray-800 font-medium">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
