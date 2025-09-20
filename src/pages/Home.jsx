import { ParallaxEffect } from "../components/homePageComponent/ParallaxEffect";
import { useNavigate } from "react-router-dom";
import FullLogo from "../assets/logo/aroma_in.png"; // Corrected the file path

// import img from "../assets/homePageImages/home-page.jpeg";
import img_2 from "../assets/kdn/img_12.jpeg"; // Corrected the file path
import img_3 from "../assets/kdn/img_5.jpeg";
// import logo from '../assets/logo/kdnLogo.png'; // Corrected the file path

import { AboutUs } from "../components/homePageComponent/AboutUs";
import { Accommodation } from "../components/homePageComponent/Accommodation";
import { Gallery } from "../components/homePageComponent/Gallery";
import { Testimonial } from "../components/homePageComponent/Testimonial";
import { ContactUs } from "../components/homePageComponent/ContactUs";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp Icon
import { Facilities } from "../components/homePageComponent/Facilities"; // Import Facilities component

export function Home() {
  const navigate = useNavigate();

  function handleNavigate() {
    window.open('#');
  }

  return (
    <>
      <div className="flex flex-col min-h-screen px-4 md:px-20 lg:px-40 pt-[12vh]">
        {/* Animated Resort Name */}
        <div className="flex h-60 justify-center items-center">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center 
               bg-gradient-to-r from-[#42c0b6] via-[#3baea0] to-[#2e9c94]
               text-transparent bg-clip-text animate-fade-in drop-shadow-xl"
            style={{ fontFamily: "'Ancizar Serif', serif" }}
          >
            Blue Bell
          </h1>
          {/* <img className=" h-40 " src={logo} alt="" /> */}


        </div>

        {/* Parallax Effect */}
        <ParallaxEffect
          img={img_2}
          height="h-[100vh]"
          className="object-cover bg-fixed"
        />
      </div>

      {/* Sections with Responsive Spacing */}
      <div className="mt-10 md:mt-20" id="aboutus">
        <AboutUs />
      </div>

      <div className="mt-10 md:mt-20" id="accommodation">
        <Accommodation />
      </div>

      <div className="mt-10 md:mt-20" id="facilities">
        <Facilities />
      </div>

      <div id="gallery" className="mt-10 md:mt-20">
        <Gallery />
      </div>

      <div className="mb-20 px-4 md:px-20 lg:px-40 py-10">
        <ParallaxEffect img={img_3} height="min-h-[100vh] md:min-h-[150vh]">
          <Testimonial />
        </ParallaxEffect>
      </div>

      <div id="contact" className="mt-10 md:mt-20">
        <ContactUs />
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-20 left-0 right-0 flex justify-between px-6 md:px-12 z-50">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/9350388959"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
        >
          <FaWhatsapp size={24} className="text-white" />
        </a>

        {/* Floating Book Now Button */}
        <button
          className="fixed bottom-10 right-4 md:right-10 -translate-y-1/2 bg-blue-600 text-white px-5 py-3 md:px-6 md:py-4 rounded-full shadow-lg hover:bg-blue-700 transition-all font-medium z-50"
          onClick={handleNavigate}
        >
          Book Now
        </button>
      </div>
    </>
  );
}
