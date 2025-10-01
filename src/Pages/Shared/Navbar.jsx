import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; 
import { Link } from "react-scroll";
import logo1 from "../../assets/Mumair (1).png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    if (localStorage.theme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-black shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left side logo */}
        <div className="flex items-center space-x-2">
          <img src="/Subtract.png" alt="Logo" className="w-8 h-8" />
          <img src={logo1} alt="Logo" className="w-24 h-6" />
        </div>

        {/* Desktop menu + dark mode */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="home" smooth duration={500}    className="cursor-pointer hover:text-yellow-500 dark:text-white ">Home</Link>
          <Link to="about" smooth duration={500}   className="cursor-pointer hover:text-yellow-500 dark:text-white ">About</Link>
          <Link to="services" smooth duration={500}  className="cursor-pointer hover:text-yellow-500 dark:text-white ">Services</Link>
          <Link to="projects" smooth duration={500} className="cursor-pointer hover:text-yellow-500 dark:text-white ">Projects</Link>
          <Link to="testimonials" smooth duration={500}   className="cursor-pointer hover:text-yellow-500 dark:text-white">Testimonials</Link>
          <Link to="contact" smooth duration={500} className="cursor-pointer hover:text-yellow-500 dark:text-white">Contact</Link>
          <a href="/cv.pdf" download className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
            Download CV
          </a>

          {/* 🌗 Dark Mode Button (desktop) */}
          <button
            onClick={toggleDarkMode}
            className="px-3 py-2 rounded-md bg-orange-500 text-white dark:bg-white dark:text-gray-100"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-black shadow-lg flex flex-col items-center space-y-4 py-6">
          <Link onClick={toggleMenu} to="home" smooth duration={500}  className="cursor-pointer hover:text-yellow-500 dark:text-white">Home</Link>
          <Link onClick={toggleMenu} to="about" smooth duration={500}   className="cursor-pointer hover:text-yellow-500 dark:text-white">About</Link>
          <Link onClick={toggleMenu} to="services" smooth duration={500}  className="cursor-pointer hover:text-yellow-500 dark:text-white">Services</Link>
          <Link onClick={toggleMenu} to="projects" smooth duration={500}  className="cursor-pointer hover:text-yellow-500 dark:text-white">Projects</Link>
          <Link onClick={toggleMenu} to="contact" smooth duration={500}  className="cursor-pointer hover:text-yellow-500 dark:text-white">Contact</Link>
          <a href="/cv.pdf" download className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
            Download CV
          </a>

          {/* 🌗 Dark Mode Button (mobile dropdown) */}
          <button
            onClick={toggleDarkMode}
            className="px-3 py-2 rounded-md bg-orange-500 text-white dark:bg-white dark:text-gray-100"
          >
            {darkMode ? "☀️ " : "🌙 "}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
