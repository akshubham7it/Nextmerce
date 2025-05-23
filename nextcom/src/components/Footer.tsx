export default function Footer() {
  return (
    <footer className="bg-white text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="font-bold text-lg mb-4 text-black">Help & Support</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              Location: 685 Market Street, Las Vegas, LA 95820, United States.
            </li>
            <li className="flex items-start gap-2">
              Phone: (+099) 532-786-9843
            </li>
            <li className="flex items-start gap-2">
              Mail: support@example.com
            </li>
          </ul>
          <div className="flex mt-4 space-x-3 text-lg text-gray-500">
            <a href="#">F</a>
            <a href="#">X</a>
            <a href="#">T</a>
            <a href="#">G</a>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-4 text-black">Account</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Login / Register</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-4 text-black">Quick Link</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">FAQ's</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-4 text-black">Download App</h2>
          <p className="text-sm mb-4">Save $3 With App & New User only</p>
          <div className="space-y-3">
            <img src="/appstore.png" alt="App Store" className="w-40" />
            <img src="/googleplay.png" alt="Google Play" className="w-40" />
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-4 px-4 text-center md:flex md:justify-between md:items-center text-sm">
        <p className="text-gray-500 px-10 text-xl font-bold text-">&copy; 2025. All rights reserved by Pimjo.</p>
        <div className="flex items-center justify-center space-x-4 mt-2 md:mt-0">
          <span className="text-gray-500 text-xl font-bold">We Accept:</span>
          <img src="/visa.jpg" alt="Visa" className="w-16 h-10" />
          <img src="/paypal.jpg" alt="PayPal" className="w-16 h-10" />
          <img src="/mastercard.jpg" alt="Mastercard" className="w-16 h-10" />
          <img src="/applepay.jpg" alt="Apple Pay" className="w-16 h-10" />
          <img src="/gpay.jpg" alt="Google Pay" className="w-16 h-10" />
        </div>
      </div>
    </footer>
  );
}
