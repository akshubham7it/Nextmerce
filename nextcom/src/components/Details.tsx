import { useState } from "react";
import { CheckCircle, Plus, Minus } from "lucide-react";

export default function Detail() {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="grid md:grid-cols-2 gap-3">
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Shop Details</h2>
        </div>
  <div className="flex justify-end items-center text-sm">
            <a href="#" className="text-gray-600 hover:text-blue-500">Home </a> <p className="px-2 text-gray-600"></p>/ <a className="px-4 text-blue-500 " href="#">Shop Details</a>
        </div>
        </div>

      <div className="grid md:grid-cols-2 gap-3">
        <div className="bg-gray-50 p-6 rounded-md w-300 h-300 object-cover">
            <img className="" src="/hp.jpg" alt="" />
            
        </div>

        <div>
          <div className="flex items-start justify-between">
            <h3 className="text-4xl font-bold text-blue-900 py-12 leading-snug">
              True Wireless Noise <br /> Cancelling Headphone
            </h3>
            <span className="bg-blue-500 text-white text-md px-3 py-1 rounded-md font-semibold mt-1">
              30% OFF
            </span>
          </div>

          <div className="flex items-center mt-2 space-x-2 text-sm text-gray-500">
            <span> 0 customer reviews</span>
            <CheckCircle size={19} className="text-green-600" />
            <span className="text-green-600">In Stock</span>
          </div>

          <div className="mt-4 text-lg">
            Price: <span className="font-bold text-md text-black">$899</span>{" "}
            <span className="line-through text-sm font-bold text-gray-700">$930</span>
          </div>
        
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2"> Free delivery available</li>
            <li className="flex items-center gap-2">
               Sales 30% Off Use Code: <span className="font-semibold">PROMO30</span>
            </li>
            <li className="flex items-center gap-2"> test</li>
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

            <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-md overflow-hidden">
                <button
                onClick={decreaseQuantity}
                className="w-12 h-12 flex items-center justify-center text-lg text-gray-700 hover:bg-gray-200"
                >
                <Minus size={16} />
                </button>
                <span className="w-12 h-12 flex items-center justify-center border-l border-r text-lg">
                {quantity}
                </span>
                <button
                onClick={increaseQuantity}
                className="w-12 h-12 flex items-center justify-center text-lg text-gray-700 hover:bg-gray-200"
                >
                <Plus size={16} />
                </button>
            </div>

            <button className="w-40 h-12 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium">
                Purchase Now
            </button>
            <button className="w-40 h-12 bg-gray-900 text-white rounded-md hover:bg-gray-800 font-medium">
                Add to Cart
            </button>
            </div>

        </div>
      </div>
    </div>
  );
}
