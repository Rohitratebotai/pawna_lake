import { useState, useEffect } from "react";
import BookingEngineMobile from "../components/bookingEngine/BookingEngineMobile";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaWhatsapp } from "react-icons/fa";
import BookingEngine from "../components/bookingEngine/BookingEngine";

import d_img1 from "../assets/kdn/img_1.jpeg";
import p_img5 from "../assets/kdn/img_5.jpeg";

const rooms = [
  {
    name: "Standard Room",
    description:
      "A cozy and affordable room with essential amenities, ideal for budget-conscious travelers seeking comfort and convenience.",
    amenities: ["Queen Size Bed", "Free WiFi", "Smart TV"],
    images: [p_img5],
    category: "Budget-Friendly",
  },
  {
    name: "Budget Room",
    description:
      "An affordable option with all basic facilities, ideal for budget-conscious travelers seeking comfort and convenience.",
    amenities: ["Queen Size Bed", "Free WiFi", "Non Attached Bathroom"],
    images: [d_img1],
    category: "Budget-Friendly",
  },
  
];

export function Room() {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [filteredRooms, setFilteredRooms] = useState(rooms);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    setIsClient(true);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filterRooms = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredRooms(rooms);
    } else {
      setFilteredRooms(rooms.filter((room) => room.category === category));
    }
  };

  if (!isClient) return null;

  return (
    <>
      <div className="!z-10 !px-4 md:!mt-10 md:!px-20 !relative !pb-24">
        <div className="!h-fit !w-full !py-20 !bg-back">
          {isMobile ? (
            <BookingEngineMobile />
          ) : (
            <BookingEngine
              containerId="book-now"
              dataTypeId="123"
              dataBrandId="165"
              dataBtnColor=""
            />
          )}
        </div>

        <div className="!mb-10">
  {/* Filter Buttons */}
  <div className="flex justify-center gap-4 mb-8">
    <button
      className={`!py-2 !px-4 !rounded-lg transition-all !text-sm md:!text-base font-semibold ${
        activeCategory === "All"
          ? "!bg-white !text-[#29b497] !shadow-md"
          : "!bg-[#29b497] !text-white"
      } hover:!shadow-lg`}
      onClick={() => filterRooms("All")}
    >
      All Rooms
    </button>

    <button
      className={`!py-2 !px-4 !rounded-lg transition-all !text-sm md:!text-base font-semibold ${
        activeCategory === "Luxurious"
          ? "!bg-white !text-[#29b497] !shadow-md"
          : "!bg-[#29b497] !text-white"
      } hover:!shadow-lg`}
      onClick={() => filterRooms("Luxurious")}
    >
      Our Luxurious Rooms
    </button>

    <button
      className={`!py-2 !px-4 !rounded-lg transition-all !text-sm md:!text-base font-semibold ${
        activeCategory === "Budget-Friendly"
          ? "!bg-white !text-[#29b497] !shadow-md"
          : "!bg-[#29b497] !text-white"
      } hover:!shadow-lg`}
      onClick={() => filterRooms("Budget-Friendly")}
    >
      Budget-Friendly Rooms
    </button>
  </div>
</div>


        <div className="!space-y-16">
          {filteredRooms.map((room, index) => (
            <div
              key={index}
              className="!flex !flex-col md:!flex-row !items-center md:!items-start !gap-10"
            >
              <div className="!w-full md:!w-100 !max-w-lg !overflow-hidden !rounded-lg shadow-lg !bg-white">
                <Swiper navigation={true} modules={[Navigation]} className="!w-full h-96">
                  {room.images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        alt={room.name}
                        className="!w-200 h-70 !object-cover !rounded-lg"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="!w-full md:!w-1/2 text-left !text-white">
                <h2 className="text-2xl italic font-light !mb-2">{room.name}</h2>
                <p className="!text-white !mb-4 !text-base">{room.description}</p>
                <ul className="!grid !grid-cols-2 !gap-3 !text-sm !text-white">
                  {room.amenities.map((amenity, idx) => (
                    <li key={idx} className="!flex !items-center !gap-2">
                      <span>✅</span> {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Floating WhatsApp Button */}
        <div className="!fixed !bottom-20 !right-6 md:!right-12 !z-50">
          <a
            href="https://wa.me/+917902915555"
            target="_blank"
            rel="noopener noreferrer"
            className="!flex !items-center !gap-2 bg-green-500 text-white !px-4 !py-4 !rounded-full !shadow-lg hover:bg-green-600 transition-all"
          >
            <FaWhatsapp size={24} className="text-white" />
          </a>
        </div>
      </div>
    </>
  );
}

