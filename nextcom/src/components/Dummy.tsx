export default function Dummy() {
  return (
    <footer className="bg-white text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
            <h2 className="font-bold mb-4 space-y-2">Help and Support</h2>
            <ul className="py-2 space-y-2">
                <li className="space-y-2"> <a href="#">685 Market Street,Las Vegas, LA 95820,United States.</a> </li>
                <li className="space-y-2"><a href="#">(+099) 532-786-9843</a></li>
                <li><a href="#">support@example.com</a></li>
            </ul>

            <div className="py-2  space-x-2">
                <a href="F">F</a>
                <a href="X">X</a>
                <a href="I">I</a>
                <a href="G">G</a>
            </div>
        </div>

        <div>
            <h2 className="font-bold mb-4">Account</h2>
            <ul className="py-2 space-y-2">
                <li className=""> <a href="#">Login / Register</a> </li>
                <li><a href="#">Cart</a></li>
                <li><a href="#">Wishlist</a></li>
                <li><a href="#">Shop</a></li>
            </ul>
        </div>

        <div>
            <h2 className="font-bold mb-4">Quick Link</h2>
            <ul className="py-2 space-y-2">
                <li> <a href="#">Privacy Policy</a> </li>
                <li><a href="#">Refund Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li> <a href="#">FAQ's</a> </li>
                <li><a href="#">Contact</a></li>
                
            </ul>
        </div>
    <div>

        <h2 className="font-bold mb-4">Download App</h2>
            <ul className="py-2 space-y-2">
                <li><a href="#">Save $3 With App & New User Only</a></li>
                <li> <a href="#">
                    <img src="App.jpg" alt="" />Download on App Store</a> </li>
                <li> <a href="#">Download on Play Store</a> </li>

            </ul>
    </div>

      </div>

      <div className="bg-gray-300 text:center max-w-px">
        <p>&copy;</p>
      </div>
    </footer>
  );
}
