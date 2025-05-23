import { useState } from "react";
import { ChevronDown, ShoppingCart, User, Search } from "lucide-react";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
    
   <header className="bg-white px-8 py-4 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-3 text-2xl font-bold text-blue-600">
        <img className="w-15 h-15 object-contain" src="/logo.svg" alt="Logo" />
        <span></span>

  </div>
      <nav className="flex-1 mx-6 flex items-center space-x-6">
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
          >
            <span>Categories</span>
            <ChevronDown size={18} />
          </button>
          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-md rounded-md py-2 z-10">
              <a className="block px-4 py-2 hover:bg-red-100 hover:text-blue-700" href="#">
                Laptop & PC
              </a>
              <a className="block px-4 py-2 hover:bg-red-100 hover:text-blue-700" href="#">
                Watches
              </a>
              <a className="block px-4 py-2 hover:bg-red-100 hover:text-blue-700" href="#">
                Mobile & Tablets
              </a>
               <a className="block px-4 py-2 hover:bg-red-100 hover:text-blue-700" href="#">
                Health & Sports
               </a>
               <a className="block px-4 py-2 hover:bg-red-100 hover:text-blue-700" href="#">
                Home Appliances
               </a>
               <a className="block px-4 py-2 hover:bg-red-100 hover:text-blue-700
                " href="#">
                Games & Videos
              </a>   

              <a className="block px-4 py-2 hover:bg-red-100 hover:text-blue-700
                " href="#">
                Televisions
              </a>   
            </div>
          )}

        </div>
        <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="I am searching for..."
              className="w-full pl-10 pr-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>
      </nav>

      <div className="flex items-center space-x-3 text-sm">
        <div className="w-8"><img src="call.jpg" alt="" /></div>
        <a href="#" className="text-gray-700 hover:text-red-600 leading-tight">
          <div className="text-xs text-gray-500">    24/7 Support</div>
          <div className="font-semibold">(+965) 7492-3477</div>
        </a>

        <a href="#" className="flex items-center text-gray-700 px-3 hover:text-blue-600">
          <User size={20} className="mr-1" />
          Account
        </a>
        <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
          <ShoppingCart size={20} className="mr-1" />
          Cart
        </a>
      </div>
    </header>

        

            </>
  );
}