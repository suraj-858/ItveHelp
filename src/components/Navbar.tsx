
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from '../assets/Images/logo1.jpeg'
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
         <header className="bg-orange-500 text-white">
      <div className="flex justify-between items-center px-6 py-2 text-sm">
        <span className="text-white">📧 karn.sharma100@gmail.com</span>
        <div className="flex space-x-4">
          <FaFacebookF className="cursor-pointer hover:text-gray-200" />
          <FaInstagram className="cursor-pointer hover:text-gray-200" />
          <FaLinkedinIn className="cursor-pointer hover:text-gray-200" />
        </div>
      </div>

      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">

          <div className="flex items-center space-x-2">
            <img src = {Logo} alt="Logo" className="h-12 w-12" />
          </div>

          <ul className="hidden md:flex space-x-6 text-gray-700">
            <Link to='/' >
            <li className={` ${location.pathname === "/" ? "text-orange-500 border-b-2 border-orange-500": "text-gray-700"} cursor-pointer`}>Home</li>
            </Link>
            <Link to='/about'>
            <li className={` ${location.pathname === "/about" ? "text-orange-500 border-b-2 border-orange-500": "text-gray-700"} cursor-pointer`}>About Us</li>
            </Link>
            <Link to='/event' >
            <li className={` ${location.pathname === "/event" ? "text-orange-500 border-b-2 border-orange-500": "text-gray-700"} cursor-pointer`}>Events</li>
            </Link>
            <Link to='/'>
            <li className={` ${location.pathname === "" ? "text-orange-500 border-b-2 border-orange-500": "text-gray-700"} cursor-pointer`}>Blogs</li>
            </Link>
            <Link to='/contact'>
            <li className={` ${location.pathname === "/contact" ? "text-orange-500 border-b-2 border-orange-500": "text-gray-700"} cursor-pointer`}>Contact Us</li>
            </Link>
          </ul>
          
          <div className="flex space-x-4">
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">Login</button>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">Donate</button>
          </div>
        </div>
      </nav>
    </header>
    </div>
  )
}

export default Navbar