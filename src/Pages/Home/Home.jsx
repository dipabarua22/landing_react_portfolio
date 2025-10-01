import React, { useEffect, useState } from "react";
import Heroimage from "../../assets/Group 2.png";
import Facebook from "../../assets/Facebook-N.png";
import Twitter from "../../assets/Twitter-N.png";
import Instagram from "../../assets/Instagram-N.png";
import Linkdin from "../../assets/LinkedIn-N.png";
import heroimage2 from "../../assets/newimg.png";
import Icon1 from "../../assets/icon1.png";
import Icon2 from "../../assets/icon2.png";
import Icon3 from "../../assets/icon3.png";
import Icon4 from "../../assets/icon4.png";
import Webdesign1 from "../../assets/Web1.1.jpg";
import Webdesign2 from "../../assets/Web1.2.jpg";
import Webdesign3 from "../../assets/web2.1.png";
import Webdesign4 from "../../assets/Web2.2.png";
import Webdesign5 from "../../assets/web3.1.jpg";
import Webdesign6 from "../../assets/Web3.2.jpg";
import man1 from "../../assets/Ellipse 10.png";
import man2 from "../../assets/Ellipse 11.png";
import herodark from '../../assets/darkmode.png';

const Home = () => {
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

  // Toggle handler
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

  return (
    <div className="pt-1">
      {/* 🌗 Dark Mode Toggle Button */}
      <div className="fixed top-4 right-4 z-40">
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded-md shadow bg-orange-500 text-white dark:bg-gray-700 dark:text-gray-100 transition"
        >
          {darkMode ? "☀️ " : "🌙 "}
        </button>
      </div>

      {/* --------Home Section---------------- */}
      <section
        id="home"
        className="pt-10 bg-white dark:bg-black min-h-screen flex flex-col items-center justify-center pl-16"
      >
        <div className="flex flex-col md:flex-row items-center md:space-x-50 max-w-7xl w-full">
          {/* Left content */}
          <div className="text-center md:text-left max-w-lg">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Hi I am
            </p>
            <h1 className="text-2xl font-bold text-orange-600">Muhammad Umair</h1>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-black dark:text-white mt-2">
              UI & UX <br />
            </h2>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-black dark:text-white ml-28">
              Designer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
              lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
              pharetra
            </p>
            <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition">
              Hire Me
            </button>
          </div>

          {/* Right Image Section */}
          <div className="mt-10 md:mt-0 flex flex-col items-center relative">
            {/* Image container */}
            <div className="relative w-80">
              {/* Main Hero Image */}
              <img
                src={Heroimage}
                alt="profile"
                className="w-full h-full object-cover"
              />
              {/*  Orange Rectangle Overlay */}
              <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[78%] h-11 bg-orange-400 opacity-70"></div>
            </div>

            {/* Social Icons with dark:invert */}
            <div className="flex justify-center space-x-6 mt-6">
              <a href="#">
                <img src={Facebook} alt="facebook" className="w-6 h-6 dark:invert" />
              </a>
              <a href="#">
                <img src={Twitter} alt="twitter" className="w-6 h-6 dark:invert" />
              </a>
              <a href="#">
                <img src={Instagram} alt="instagram" className="w-6 h-6 dark:invert" />
              </a>
              <a href="#">
                <img src={Linkdin} alt="linkedin" className="w-6 h-6 dark:invert" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ----------------- About section------------------- */}
      <section
  id="about"
  className="h-screen flex justify-center items-center bg-white dark:bg-black px-8"
>
  <div className="flex flex-col md:flex-row items-center gap-14 max-w-6xl w-full">
    
    {/* Left - Profile Image */}
    <div className="relative w-80 h-90">
      {/* Light Mode Image */}
      <img
        src= {heroimage2}// white background version
        alt="profile light"
        className="w-full h-full object-cover block dark:hidden rounded-full"
      />

      {/* Dark Mode Image */}
      <img
        src= {herodark}
        alt="profile dark"
        className="w-full h-full object-cover hidden dark:block rounded-full"
      />
    </div>

    {/* Right - About Content */}
    <div className="flex-1">
      <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">
        About Me
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus nisi. Aliquet donec morbi convallis pretium. Turpis tempus
        pharetra.
      </p>

      {/* Skills */}
      <div className="space-y-6">
        {[
          { label: "UX", width: "95%" },
          { label: "Website Design", width: "80%" },
          { label: "App Design", width: "90%" },
          { label: "Graphic Design", width: "85%" },
        ].map((skill, i) => (
          <div key={i}>
            <p className="font-semibold mb-1 text-black dark:text-white">
              {skill.label}
            </p>
            <div className="relative w-full h-2 bg-gray-300 dark:bg-gray-700 rounded-full">
              <div
                className="absolute left-0 top-0 h-2 bg-orange-500 rounded-full"
                style={{ width: skill.width }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
      {/* -------- Services -------- */}
      <section
        id="services"
        className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-black py-16 px-6"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Services</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
            lectus netus in. Aliquet donec morbi convallis pretium.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full">
          {[{ img: Icon1, title: "UI/UX" }, { img: Icon2, title: "Web Design" }, { img: Icon3, title: "App Design" }, { img: Icon4, title: "Graphic Design" }].map((card, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
              <img src={card.img} alt={card.title} className="mx-auto mb-4 w-16 h-16" />
              <h3 className="font-bold text-xl mb-2 text-black dark:text-white">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* -------- Projects -------- */}
      <section id="projects" className="py-20 bg-gray-100 dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris
            est risus lectus. Phasellus consequat urna tellus.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["All", "UI/UX", "Web Design", "App Design", "Graphic Design"].map(
              (btn, idx) => (
                <button
                  key={idx}
                  className={`px-4 py-2 rounded-md border ${
                    btn === "Web Design"
                      ? "bg-orange-500 text-white"
                      : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {btn}
                </button>
              )
            )}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[{ img1: Webdesign1, img2: Webdesign2, title: "AirCalling Landing Page Design" }, { img1: Webdesign3, img2: Webdesign4, title: "Business Landing Page Design" }, { img1: Webdesign5, img2: Webdesign6, title: "Ecom Web Page Design" }].map((project, idx) => (
              <div key={idx} className="text-left group">
                <div className="relative h-80 w-full bg-[#8B5E3C] dark:bg-gray-700 rounded-lg shadow-lg p-4 flex items-center justify-center">
                  <img src={project.img1} alt={project.title} className="absolute -top-0 left-9 w-[90%] h-[90%] object-cover rounded-md shadow-md z-10 opacity-80" />
                  <img src={project.img2} alt={project.title} className="absolute top-6 right-6 w-[90%] h-[90%] object-cover rounded-md shadow-xl z-20 group-hover:scale-105 transition-transform" />
                </div>
                <p className="mt-4 text-sm text-orange-500 font-semibold">Web Design</p>
                <h3 className="font-bold text-lg text-black dark:text-white">{project.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------- Testimonials -------- */}
      <section id="testimonials" className="py-22 bg-white dark:bg-black text-center">
        <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">Testimonials</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto px-4">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
        </p>

        <div className="relative flex flex-col items-center justify-center">
          <div className="bg-gray-50 dark:bg-gray-800 shadow-md rounded-xl p-6 max-w-2xl flex flex-col md:flex-row items-center relative z-10 mx-4">
            <img src={man1} alt="Main" className="w-28 h-28 rounded-full object-cover mb-4 md:mb-0 md:mr-6" />
            <div className="text-left">
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm sm:text-base md:text-base">
                <span className="text-orange-500 text-xl font-bold">“</span>
                Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit
                neque mattis id tellus arcu condimentum.
                <span className="text-orange-500 text-xl font-bold">„</span>
              </p>
              <h3 className="font-bold text-base sm:text-lg text-black dark:text-white">Name</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* -------- Contact -------- */}
      <section id="contact" className="py-20 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">Lets Design Together</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
            lectus netus in.
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-gray-800 dark:text-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
            >
              Contact Me
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
