import { ContactUs } from "../components/homePageComponent/ContactUs";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp Icon

import { useNavigate } from "react-router-dom";

import img1 from "../assets/eventpage/1.jpeg";
import img2 from "../assets/eventpage/2.jpeg";
import img3 from "../assets/eventpage/3.jpeg";
import img4 from "../assets/eventpage/4.jpeg";
import img5 from "../assets/eventpage/5.jpeg";

export function Events() {
  const images = [img1, img2, img3, img4, img5];
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/");
  }
  return (
    <div className="pt-0">
      {/* Image Grid with Reduced Height for Mobile */}
      <div className="grid grid-cols-5 gap-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Event ${index + 1}`}
            className="h-[200px] sm:h-[350px] md:h-[500px] lg:h-[700px] w-full object-cover"
          />
        ))}
      </div>

      {/* Content Section */}
      <div className="px-4 md:px-12 lg:px-40 py-6 md:py-10">
        <div className="text-center text-white">
          <h1 className="text-xl sm:text-2xl md:text-3xl mb-3 md:mb-5 font-light">
            Events & Activities
          </h1>

          <div className="text-sm sm:text-base md:text-lg font-light leading-relaxed space-y-6">
            {/* Swimming Pool & Sports Activities */}
            <div>
              <h3 className="text-xl font-light">
                Swimming Pool & Sports Activities
              </h3>
              <p>
                Unwind in our private swimming pool or spark your energy with a
                friendly game of cricket on our lush, well-maintained turf.
                Whether you seek calm or excitement, our tranquil surroundings
                offer the perfect balance of both.
              </p>
            </div>

            {/* Jungle Safari (Gypsy Ride) */}
            <div>
              <h3 className="text-xl font-light">Jungle Safari (Gypsy Ride)</h3>
              <p>
                Embark on an exhilarating jungle safari with our guided gypsy
                rides (available at an additional cost). Explore untouched
                wilderness, breathe in the fresh forest air, and witness exotic
                wildlife in their natural habitat.
              </p>
            </div>

            {/* Destination Weddings & Special Events */}
            <div>
              <h3 className="text-xl font-light">
                Weddings, Retreats & Celebrations
              </h3>
              <p>
                Make your special day truly extraordinary at VOCO Farms. From
                dreamy destination weddings to corporate retreats and social
                gatherings, we offer bespoke event planning, elegant backdrops,
                and seamless service that bring your vision to life.
              </p>
            </div>

            {/* Farm-to-Table Dining */}
            <div>
              <h3 className="text-xl font-light">Farm-to-Table Dining</h3>
              <p>
                Savor organic, farm-fresh meals crafted by our talented chefs.
                Using ingredients grown right on the property, we serve
                traditional delicacies, wholesome salads, and refreshing herbal
                teas—providing an authentic taste of nature on every plate.
              </p>
            </div>

            {/* Corporate Events */}
            <div>
              <h3 className="text-xl font-light">Corporate Events</h3>
              <p>
                VOCO Farms offers the perfect escape for corporate meetings,
                events, and team-building activities. Let your team relax,
                re-energize, and reconnect in a serene setting, supported by
                modern amenities and thoughtful hospitality.
              </p>
              <p>
                Our resort features 23 well-appointed rooms, a spa, a swimming
                pool, and both indoor and outdoor games. Host strategic
                discussions or social mixers in our 1000 sq. ft. conference hall
                or on the expansive lawns, equipped for seamless presentations
                and gatherings.
              </p>
              <p>
                Enjoy a harmonious blend of business and leisure—world-class
                conferencing, fine dining, entertainment, and tranquil
                surroundings await to make your retreat both productive and
                memorable.
              </p>
            </div>

            {/* Social Events */}
            <div>
              <h3 className="text-xl font-light">Social Events</h3>
              <p>
                Celebrate life’s most cherished moments at VOCO Farms. Whether
                it's a wedding, birthday, or a festive get-together, our venue
                offers stunning décor, exquisite catering, and impeccable
                service to create unforgettable memories with your loved ones.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact">
        <ContactUs />
      </div>

      {/* Floating Buttons */}
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-20 left-0 right-0 flex justify-between px-6 md:px-12 z-50">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+919303232302"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
        >
          <FaWhatsapp size={24} className="text-white" />
        </a>

        {/* Floating Book Now Button */}
        <button
          className="fixed bottom-1/4 md:bottom-1/5 right-4 md:right-10 -translate-y-1/2 bg-blue-600 text-white px-5 py-3 md:px-6 md:py-4 rounded-full shadow-lg hover:bg-blue-700 transition-all font-medium z-50"
          onClick={handleNavigate}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
