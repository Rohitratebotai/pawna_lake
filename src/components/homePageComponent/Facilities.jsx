import { IoRestaurantOutline } from "react-icons/io5";
import { TbTrekking, TbSwimming } from "react-icons/tb";
import { FaBiking, FaSeedling, FaVolleyballBall, FaChessBoard } from "react-icons/fa";
import { MdPool, MdSportsCricket, MdChildCare, MdOutlineSportsHockey } from "react-icons/md";
import { GiBinoculars, GiCampfire, GiTennisRacket } from "react-icons/gi";

const facilities = [
  // { id: 1, title: "Bonfire Nights", description: "Relax by the bonfire with music, storytelling, and stargazing.", icon: < GiCampfire className="h-14 w-20 text-gray-700" /> },
  { id: 2, title: "Restaurant", description: "Savor delicious farm-fresh meals made with organic ingredients.", icon: <IoRestaurantOutline className="h-14 w-20 text-gray-700" /> },
  // { id: 3, title: "Jungle Trekking & Hiking", description: "Explore thrilling forest trails and enjoy nature up close.", icon: <TbTrekking className="h-14 w-20 text-gray-700" /> },
  { id: 4, title: "Cycling & Nature Trails", description: "Ride through scenic routes and immerse yourself in nature.", icon: <FaBiking className="h-14 w-20 text-gray-700" /> },
  // { id: 5, title: "Organic Farming", description: "Get hands-on experience in organic farming and sustainability.", icon: <FaSeedling className="h-14 w-20 text-gray-700" /> },
  // { id: 6, title: "Bird Watching & Photography", description: "Spot exotic birds and capture breathtaking nature shots.", icon: <GiBinoculars className="h-14 w-20 text-gray-700" /> },
  { id: 7, title: "Board Games", description: "Enjoy engaging board games with family and friends.", icon: <FaChessBoard className="h-14 w-20 text-gray-700" /> },
  // { id: 8, title: "Swimming Pool", description: "Cool off in our clean and well-maintained swimming pool.", icon: <TbSwimming className="h-14 w-20 text-gray-700" /> },
  { id: 9, title: "Kids Pool", description: "A shallow and fun pool designed for kids' safety and enjoyment.", icon: <MdPool className="h-14 w-20 text-gray-700" /> },
  { id: 10, title: "Kids Play Zone", description: "A vibrant play area where kids can have endless fun.", icon: <MdChildCare className="h-14 w-20 text-gray-700" /> },
  // { id: 11, title: "Volleyball", description: "Enjoy a fun game of volleyball with friends and family.", icon: <FaVolleyballBall className="h-14 w-20 text-gray-700" /> },
  // { id: 12, title: "Croquet", description: "Play the classic lawn game of croquet in a relaxing setting.", icon: <MdOutlineSportsHockey className="h-14 w-20 text-gray-700" /> },
  // { id: 13, title: "Cricket", description: "Hit the field for a thrilling cricket match with your group.", icon: <MdSportsCricket className="h-14 w-20 text-gray-700" /> },
  { id: 14, title: "Badminton", description: "Enjoy a fast-paced game of badminton on our dedicated courts.", icon: <GiTennisRacket className="h-14 w-20 text-gray-700" /> },
];

export function Facilities() {
  return (
    <div className="text-center px-4 md:px-20 lg:px-40 py-10">
      <h1 className="text-center text-3xl font-light mb-8">Our Facilities</h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {facilities.map((facility) => (
          <div
            key={facility.id}
            className="bg-white min-h-[300px] p-10 rounded-xl shadow-lg w-full sm:w-72 md:w-90 mx-auto flex flex-col items-center justify-center"
          >
            {facility.icon}
            <h1 className="my-4 text-lg font-medium">{facility.title}</h1>
            <p className="text-base md:text-sm text-gray-600">{facility.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
