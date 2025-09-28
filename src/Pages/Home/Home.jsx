import React from 'react';
import Heroimage from '../../assets/Group 2.png';
import Facebook from '../../assets/Facebook - Negative.png';
import Twitter from '../../assets/Twitter - Negative.png';
import Instagram from '../../assets/instagram - Negative.png';
import Linkdin from '../../assets/LinkedIn - negative.png';
import heroimage2 from '../../assets/newimg.png';
import Icon1 from '../../assets/icon1.png';
import Icon2 from '../../assets/icon2.png';
import Icon3 from '../../assets/icon3.png';
import Icon4 from '../../assets/icon4.png';
import Webdesign1 from '../../assets/Web1.1.jpg';
import Webdesign2 from '../../assets/Web1.2.jpg';
import Webdesign3 from '../../assets/web2.1.png';
import Webdesign4 from '../../assets/Web2.2.png';
import Webdesign5 from '../../assets/web3.1.jpg';
import Webdesign6 from '../../assets/Web3.2.jpg';
import man1 from '../../assets/Ellipse 10.png';
import man2 from '../../assets/Ellipse 11.png';

const Home = () => {
  return (
    <div className="pt-1">
      {/* --------Home section---------------- */}
      <section
        id="home"
        className="pt-10 bg-white min-h-screen flex flex-col items-center justify-center pl-16"
      >
        <div className="flex flex-col md:flex-row items-center md:space-x-50 max-w-7xl w-full">
          {/* Left content */}
          <div className="text-center md:text-left max-w-lg">
            <p className="text-sm font-medium">Hi I am</p>
            <h1 className="text-2xl font-bold text-orange-600">Muhammad Umair</h1>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-black mt-2">
              UI & UX <br /></h2>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-black ml-28">Designer</h2>
            <p className="text-gray-600 mt-4 text-sm md:text-base">
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
            <div className="relative w-80 ">
              {/* Main Hero Image */}
              <img
                src={Heroimage}
                alt="profile"
                className="w-full h-full object-cover"
              />

              {/*  Orange Rectangle Overlay (across eyes) */}
              <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[78%] h-11 bg-orange-400 opacity-70 "></div>

              {/* Profile icon at top-right */}

            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mt-6">
              <a href="#">
                <img src={Facebook} alt="facebook" className="w-6 h-6" />
              </a>
              <a href="#">
                <img src={Twitter} alt="twitter" className="w-6 h-6" />
              </a>
              <a href="#">
                <img src={Instagram} alt="instagram" className="w-6 h-6" />
              </a>
              <a href="#">
                <img src={Linkdin} alt="linkedin" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ----------------- About section------------------- */}
      <section
        id="about"
        className="h-screen flex justify-center items-center bg-white px-8"
      >
        <div className="flex flex-col md:flex-row items-center gap-14 max-w-6xl w-full">
          {/* Left - Image */}
          <div className="relative w-80 h-90 ">
            {/* Main Image */}
            <img
              src={heroimage2} // replace with your imported image
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right - About Content */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
              lectus nisi. Aliquet donec morbi convallis pretium. Turpis tempus
              pharetra.
            </p>

            {/* Skills */}
            <div className="space-y-6">
              {/* Skill Item */}
              <div>
                <p className="font-semibold mb-1">UX</p>
                <div className="relative w-full h-2 bg-gray-300 rounded-full">
                  <div className="absolute left-0 top-0 h-2 bg-orange-500 rounded-full w-[95%]"></div>
                  <div className="absolute right-[5%] -top-2 w-4 h-4 rounded-full bg-orange-500"></div>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-1">Website Design</p>
                <div className="relative w-full h-2 bg-gray-300 rounded-full">
                  <div className="absolute left-0 top-0 h-2 bg-orange-500 rounded-full w-[80%]"></div>
                  <div className="absolute right-[20%] -top-2 w-4 h-4 rounded-full bg-orange-500"></div>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-1">App Design</p>
                <div className="relative w-full h-2 bg-gray-300 rounded-full">
                  <div className="absolute left-0 top-0 h-2 bg-orange-500 rounded-full w-[90%]"></div>
                  <div className="absolute right-[10%] -top-2 w-4 h-4 rounded-full bg-orange-500"></div>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-1">Graphic Design</p>
                <div className="relative w-full h-2 bg-gray-300 rounded-full">
                  <div className="absolute left-0 top-0 h-2 bg-orange-500 rounded-full w-[85%]"></div>
                  <div className="absolute right-[15%] -top-2 w-4 h-4 rounded-full bg-orange-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="services" className="min-h-screen flex flex-col justify-center items-center bg-white py-16 px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Services</h2>
          <p className="text-gray-600 mt-4 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
            lectus netus in. Aliquet donec morbi convallis pretium.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
            <img
              src={Icon1}
              alt="UI/UX"
              className="mx-auto mb-4 w-16 h-16"
            />
            <h3 className="font-bold text-xl mb-2">UI/UX</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
            <img
              src={Icon2}
              alt="Web Design"
              className="mx-auto mb-4 w-16 h-16"
            />
            <h3 className="font-bold text-xl mb-2">Web Design</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
            <img
              src={Icon3}
              alt="App Design"
              className="mx-auto mb-4 w-16 h-16"
            />
            <h3 className="font-bold text-xl mb-2">App Design</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
            <img
              src={Icon4}
              alt="Graphic Design"
              className="mx-auto mb-4 w-16 h-16"
            />
            <h3 className="font-bold text-xl mb-2">Graphic Design</h3>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum.
            </p>
          </div>
        </div>
      </section>

      {/* ------------- Projects Section ------------- */}
      <section id="projects" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris
            est risus lectus. Phasellus consequat urna tellus.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["All", "UI/UX", "Web Design", "App Design", "Graphic Design"].map(
              (btn, idx) => (
                <button
                  key={idx}
                  className={`px-4 py-2 rounded-md border ${btn === "Web Design"
                    ? "bg-orange-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {btn}
                </button>
              )
            )}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Project Card */}
            {[
              { img1: Webdesign1, img2: Webdesign2, title: "AirCalling Landing Page Design" },
              { img1: Webdesign3, img2: Webdesign4, title: "Business Landing Page Design" },
              { img1: Webdesign5, img2: Webdesign6, title: "Ecom Web Page Design" }
            ].map((project, idx) => (
              <div key={idx} className="text-left group">
                <div className="relative h-80 w-full bg-[#8B5E3C] rounded-lg shadow-lg p-4 flex items-center justify-center">
                  {/* Back image */}
                  <img
                    src={project.img1}
                    alt={project.title}
                    className="absolute -top-0 left-9 w-[90%] h-[90%] object-cover rounded-md shadow-md z-10 opacity-80"
                  />
                  {/* Front image */}
                  <img
                    src={project.img2}
                    alt={project.title}
                    className="absolute top-6 right-6 w-[90%] h-[90%] object-cover rounded-md shadow-xl z-20 group-hover:scale-105 transition-transform"
                  />
                </div>
                <p className="mt-4 text-sm text-orange-500 font-semibold">Web Design</p>
                <h3 className="font-bold text-lg">{project.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/*----------- TESTIMONIALS-------------- */}


      <section id="testimonials" className="py-22 bg-white text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto px-4">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
          Aliquet donec morbi convallis pretium
        </p>

        <div className="relative flex flex-col items-center justify-center">
          {/* Left blurred testimonial (only on md+) */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-30 w-64 sm:w-72 hidden md:flex justify-center items-center">
            <p className="text-gray-500 text-sm italic text-center md:text-left">
              <span className="text-orange-500 text-lg font-bold">“</span>
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
              Aliquet donec morbi convallis pretium
            </p>
          </div>

          {/* Main Testimonial Card */}
          <div className="bg-gray-50 shadow-md rounded-xl p-6 max-w-2xl flex flex-col md:flex-row items-center relative z-10 mx-4">
            {/* Image */}
            <img
              src={man1}
              alt="Main"
              className="w-28 h-28 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
            />
            {/* Text Content */}
            <div className="text-left">
              <p className="text-gray-700 mb-4 text-sm sm:text-base md:text-base">
                <span className="text-orange-500 text-xl font-bold">“</span>
                Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit
                neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis
                dignissim malesuada commodo ultrices.
                <span className="text-orange-500 text-xl font-bold">„</span>
              </p>
              <h3 className="font-bold text-base sm:text-lg">Name</h3>
              <p className="text-sm text-gray-500">CEO</p>
            </div>
          </div>

          {/* Right blurred testimonial (only on md+) */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-70 w-64 sm:w-72 hidden md:flex justify-center items-center">
            <img
              src={man2}
              alt="Right"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mb-2 md:mb-0 md:mr-4"
            />
            <p className="text-gray-500 text-sm italic text-center md:text-left">
              <span className="text-orange-500 text-lg font-bold">“</span>
              Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit
              neque mattis id tell <br />
              <span className="text-black font-semibold">Name</span> <br />
              <span className="text-black font-medium">CEO</span>
            </p>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          <span className="w-3 h-3 rounded-full bg-gray-300"></span>
          <span className="w-3 h-3 rounded-full bg-orange-500"></span>
          <span className="w-3 h-3 rounded-full bg-gray-300"></span>
          <span className="w-3 h-3 rounded-full bg-gray-300"></span>
        </div>
      </section>



      {/* ---------- CONTACT -----------------*/}
      <section section id="contact" className="py-2 bg-white" >
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-4xl font-bold mb-4">Lets Design Together</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
            lectus netus in. Aliquet donec morbi convallis pretium
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
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
    </ div>

  );
};

export default Home;