import { PiMapPinAreaBold } from "react-icons/pi";
import { MdOutlineDoorSliding, MdOutlineContacts } from "react-icons/md";

// Social Media Icons
import { FaSquareInstagram, FaSquareYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

import ContactForm from "./ContactForm";

export function ContactUs() {
  return (
    <>
      <div className="px-4 md:px-20 lg:px-40 py-10">
        <h1 className="text-center text-3xl font-light mb-8 ">
          Contact
        </h1>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Address Card */}
          <div className="bg-[#42c0b6] min-h-[250px] p-10 rounded-xl flex flex-col items-center justify-center text-white hover:bg-[#29b497]">
            <PiMapPinAreaBold className="h-14 w-20" />
            <h1 className="text-center text-3xl font-light mt-4">Address</h1>
            <div className="text-center mt-3">
              <p>Blue Bell	<br />Bhaje Rd, Bhaje, Malawali N.m., Malavli, Maharashtra 410405</p>
            </div>
          </div>

          {/* Reservation Card */}
          <div className="bg-[#42c0b6] min-h-[250px] p-10 rounded-xl flex flex-col items-center justify-center text-white hover:bg-[#29b497]">
            <MdOutlineDoorSliding className="h-14 w-20" />
            <h1 className="text-center text-3xl font-light mt-4">
              Reservation
            </h1>
            <div className="text-center mt-3">
              <p>
                Call Us: <br />
                <a href="tel:+91 9922113508" className="text-[#white] hover:underline">
                  +91 9922113508
                </a>
              </p>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-[#42c0b6] min-h-[250px] p-10 rounded-xl flex flex-col items-center justify-center text-white hover:bg-[#29b497]">
            <MdOutlineContacts className="h-14 w-20" />
            <h1 className="text-center text-3xl font-light mt-4">Contact</h1>
            <div className="text-center mt-3">
              <p>
                Email Us: <br />
                <a href="mailto:bluebellhomestay99@gmail.com" className="text-[#white ] hover:underline">
                  bluebellhomestay99@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        {/* <ContactForm /> */}

        {/* Social Media Icons */}
        {/* <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://www.instagram.com/vocofarms.in/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareInstagram className="h-10 w-10 text-nav-fixed cursor-pointer hover:text-[#29b497]" />
          </a>

          <a
            href="https://www.facebook.com/people/Voco-Farms/61563327960670/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare className="h-10 w-10 text-nav-fixed cursor-pointer hover:text-[#29b497]" />
          </a>

          <a
            href="https://www.youtube.com/channel/UCh9wKid3-F6ty_PSbMD48fQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareYoutube className="h-10 w-10 text-nav-fixed cursor-pointer hover:text-[#29b497]" />
          </a>
        </div> */}

        {/* Google Map */}
      </div>
      <div className="w-full mt-4 px-4 pb-10">
        <iframe
          className="h-80 sm:h-96 md:h-[500px] lg:h-[600px] w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3778.248966262542!2d73.47727097465736!3d18.742413162361245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ab004b8ce7b1%3A0xcda1baf39c0be6af!2sBlue%20Bell%20Homestay!5e0!3m2!1sen!2sin!4v1758370840892!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}