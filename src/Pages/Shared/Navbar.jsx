import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger and close icon
import { Link } from "react-scroll";
import logo1 from '../../assets/Mumair (1).png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left side logo + name */}
        <div className="flex items-center space-x-2">
          <img src="/Subtract.png" alt="Logo" className="w-8 h-8" />
            <img src= {logo1} alt="Logo" className="w-25 h-6" />
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
            <Link></Link>
          <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500">Home</Link>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500">About</Link>
          <Link to="services" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500">Services</Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500">Projects</Link>
           <Link to="testimonials" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-600">Testimonials</Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-600">Contact</Link>
          <a href="/cv.pdf" download className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
            Download CV
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg flex flex-col items-center space-y-4 py-6">
          <Link onClick={toggleMenu} to="home" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500">Home</Link>
          <Link onClick={toggleMenu} to="about" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500">About</Link>
          <Link onClick={toggleMenu} to="services" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500">Services</Link>
          <Link onClick={toggleMenu} to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500">Projects</Link>
          <Link onClick={toggleMenu} to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-yellow-500">Contact</Link>
          <a href="/cv.pdf" download className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
