import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import d_img1 from "../../assets/kdn/img_10.jpeg";
import p_img5 from "../../assets/kdn/img_4.jpeg";

const rooms = [
	{
		name: "AC Room",
		images: [d_img1],
		// description: "A cozy and comfortable room offering essential amenities for a pleasant stay. Perfect for solo travelers or couples.",
		// amenities: ["Queen Size Bed", "Smart TV", "Free Wifi"],
		// category: "Budget-Friendly",
	},
	{
		name: "Non AC Room",
		images: [p_img5],
		// description: "An affordable option with all basic facilities, ideal for budget-conscious travelers seeking comfort and convenience.",
		// amenities: ["Queen Size Bed", "Free Wifi", "Non Attached Bathroom"],
		// category: "Budget-Friendly",
	}
];

export function Accommodation() {
	const navigate = useNavigate();
	const [filteredRooms, setFilteredRooms] = useState(rooms);
	const [activeCategory, setActiveCategory] = useState("All");

	const filterRooms = (category) => {
		setActiveCategory(category);
		if (category === "All") {
			setFilteredRooms(rooms);
		} else {
			setFilteredRooms(rooms.filter((room) => room.category === category));
		}
	};

	const roomNavi = () => {
		window.open("#", "_blank");
	};

	return (
		<div className="px-4 sm:px-8 md:px-20 lg:px-40 mb-20">
			<h1 className="text-center text-2xl sm:text-3xl font-light mb-8">
				Accommodation
			</h1>

			{/* Filter Buttons */}


			<div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
				{filteredRooms.map((room, index) => (
					<div
						key={index}
						className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-transform transform hover:scale-105"
					>
						{/* Room Image */}
						<div className="relative h-48 sm:h-56 md:h-64 lg:h-90">
							<img
								src={room.images[0]} // Display the first image of the room
								alt={room.name}
								className="w-full h-full object-cover"
							/>
							<div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white text-xs sm:text-sm px-3 py-1 rounded">
								{room.name}
							</div>
						</div>

						{/* Room Details */}
						<div className="p-4 sm:p-4 flex-grow">
							<h3 className="text-lg space-x-1  text-center uppercase sm:text-xl font-semibold text-gray-800 ">
								{room.name}
							</h3>
							{/* <p className="text-gray-600 text-xs sm:text-sm mb-4">
								{room.description || "No description available."}
							</p> */}

							{/* Room Amenities */}
							{/* <div className="mb-4">
								<h4 className="text-gray-800 font-medium mb-2 text-sm sm:text-base">
									Room Amenities
								</h4>
								<ul className="flex flex-wrap gap-2">
									{room.amenities?.map((amenity, i) => (
										<li
											key={i}
											className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full"
										>
											{amenity}
										</li>
									)) || (
										<li className="text-gray-500 text-xs">
											No amenities listed.
										</li>
									)}
								</ul>
							</div> */}
						</div>

						{/* View More Button */}
						{/* <div className="p-4">
							<button
								className="w-full bg-[#29b497] text-white py-2 rounded-lg hover:bg-[#218a78] transition-all text-sm sm:text-base"
								onClick={roomNavi} // Navigates to /room
							>
								View More
							</button>
						</div> */}
					</div>
				))}
			</div>
		</div>
	);
}
