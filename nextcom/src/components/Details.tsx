import { useState } from "react";
import { CheckCircle, Plus, Minus, Heart } from "lucide-react";

export default function Detail() {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("black");

  const getImageSrc = () => {
    if (color === "black") return "/hp.jpg";
    if (color === "blue") return "/blhp.jpg";
    return "/hp.jpg"; 
  };

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
          <a href="#" className="text-gray-600 hover:text-blue-500">Home </a>
          <p className="px-2 text-gray-600">/</p>
          <a className="px-4 text-blue-500" href="#">Shop Details</a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5 py-4">
        <div className=" p-6 rounded-md">
          <img className="object-cover w-full h-auto" src={getImageSrc()} alt="Product" />
        </div>

        <div>
          <div className="flex md:flex col items-start justify-between">
            <h3 className="text-1xl sm:text-2xl md:text-2xl lg:text-4xl font-bold text-blue-900 py-2 leading-snug">
              True Wireless Noise <br /> Cancelling Headphone
            </h3>
            <span className="bg-blue-700 hover:bg-violet-900 text-white text-xs px-3 py-1  rounded-md font-semibold mt-1 md:text-sm ">
              30% OFF
            </span>
       




          </div>

          <div className="flex items-center mt-2 space-x-2 text-xs sm:text-sm text-gray-500">
            <span>0 customer reviews</span>
            <CheckCircle size={19} className="text-green-600" />
            <span className="text-green-600">In Stock</span>
          </div>

          <div className="mt-4 text-sm sm:text-lg">
            Price: <span className="font-bold text-md text-black">$899</span>{" "}
            <span className="line-through text-xs sm:text-sm font-bold text-gray-800">$930</span>
          </div>

          <ul className="mt-4 space-y-2  text-xs lg:text-sm text-gray-700">
            <li>Free delivery available</li>
            <li>
              Sales 30% Off Use Code: <span className="font-semibold">PROMO30</span>
            </li>
            <li>test</li>
          </ul>

          <hr className="my-4" />

          <div className="mb-4">
            <span className="font-medium">Color: </span>
            <div className="flex space-x-2 mt-2">
              <button
                onClick={() => setColor("black")}
                className={`w-5 h-5 rounded-full border-2 ${
                  color === "black" ? "border-black" : "border-gray-300"
                } bg-black`}
              />
              <button
                onClick={() => setColor("blue")}
                className={`w-5 h-5 rounded-full border-2 ${
                  color === "blue" ? "border-black" : "border-gray-300"
                } bg-blue-600`}
              />
            </div>
          </div>

          <hr className="my-4" />

          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-md overflow-hidden">
              <button
                onClick={decreaseQuantity}
                className="w-5 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-lg text-gray-700 hover:bg-gray-200"
              >
                <Minus size={16} />
              </button>
              <span className="w-5 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-l border-r text-md sm:text-lg ">
                {quantity}
              </span>
              <button
                onClick={increaseQuantity}
                className="w-5 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-lg text-gray-700 hover:bg-gray-200"
              >
                <Plus size={16} />
              </button>
            </div>

            <button className="w-20 h-8 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium sm:w-32 sm:h-10 sm:text-sm">
              Purchase Now
            </button>
            <button className="w-20 h-8 text-xs bg-gray-900 text-white rounded-md hover:bg-gray-800 font-medium sm:w-32 sm:h-10 sm:text-sm">
              Add to Cart
            </button>

            <button className=" hover:bg-red-800">

              <Heart className="w-6 h-8 sm:w-8 sm:h-8"></Heart>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
