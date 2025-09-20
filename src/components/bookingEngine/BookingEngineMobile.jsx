import { useState, useEffect } from "react";

const BookingEngineMobile = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomCount, setRoomCount] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  useEffect(() => {
    setCheckoutMinDate();
  }, [checkIn]);

  function setCheckoutMinDate() {
    if (checkIn) {
      let checkInDate = new Date(checkIn);
      checkInDate.setDate(checkInDate.getDate() + 1);
      let minCheckout = checkInDate.toISOString().split("T")[0];

      if (checkOut < minCheckout) setCheckOut(minCheckout);
    }
  }

  function generateBookingData(checkIn, checkOut, roomCount, adults, children) {
    const newLocal = 3951;
    const hotel_id = newLocal;
    const combain_name = "";
    const hotel_name = "The Water Front resort";
    const state_name = "Madhya Pradesh";

    let rooms = [];
    let remainingAdults = adults;
    let remainingChildren = children;

    for (let i = 0; i < roomCount; i++) {
      let roomAdults = Math.min(remainingAdults, 2);
      let roomChildren = Math.min(remainingChildren, 1);

      rooms.push({
        no_of_adults: roomAdults,
        child_0_to_6: 0,
        child_7_to_12: roomChildren,
        no_of_child: roomChildren,
      });

      remainingAdults -= roomAdults;
      remainingChildren -= roomChildren;
    }

    return {
      from_date: checkIn,
      to_date: checkOut,
      no_of_adults: adults,
      room_count: roomCount,
      no_of_children: children,
      selected_hotel: {
        combain_name,
        hotel_id,
        hotel_name,
        state_name,
      },
      parmas_for_api: {
        from_date: checkIn,
        to_date: checkOut,
        room_count: roomCount,
        no_of_adults: adults,
        no_of_children: children,
        id: hotel_id,
        room_info: rooms,
      },
    };
  }

  function handleBooking() {
    if (!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates.");
      return;
    }

    let checkInDate = new Date(checkIn);
    let checkOutDate = new Date(checkOut);
    if (checkOutDate <= checkInDate) {
      alert("Check-out date must be at least one day after check-in date.");
      return;
    }

    const bookingData = generateBookingData(checkIn, checkOut, roomCount, adults, children);
    const encodedData = encodeURIComponent(JSON.stringify(bookingData));
    const finalUrl = `https://be.ratebotai.com/?data=${encodedData}`;

    console.log("Encoded URL:", finalUrl);
    window.open(finalUrl, "_blank");
  }

  return (
    <div className="!w-full !p-4 !bg-gray-100 !flex !flex-col !items-center !gap-4">
      <h2 className="!text-lg !font-semibold !text-center">Book Your Stay</h2>

      <input
      type="date"
      className="!w-full !p-2 !border !border-gray-300 !rounded-md !text-sm"
      value={checkIn}
      onChange={(e) => setCheckIn(e.target.value)}
      placeholder="Check-in Date"
      />

      <input
      type="date"
      className="!w-full !p-2 !border !border-gray-300 !rounded-md !text-sm"
      value={checkOut}
      onChange={(e) => setCheckOut(e.target.value)}
      placeholder="Check-out Date"
      min={checkIn ? new Date(checkIn).toISOString().split("T")[0] : ""}
      />

      {/* Room Counter with Input */}
      <div className="!w-full !flex !items-center !justify-between gap-2">
      <label className="!text-sm font-medium">Rooms:</label>
      <div className="flex items-center gap-2">
        <button
        onClick={() => setRoomCount((prev) => Math.max(1, prev - 1))}
        className="!px-2 !py-1 !bg-gray-300 !rounded"
        >
        -
        </button>
        <input
        type="number"
        min="1"
        max="15"
        className="!w-16 !text-center !border !border-gray-300 !rounded-md !p-1 !text-sm"
        value={roomCount}
        onChange={(e) =>
          setRoomCount(Math.min(15, Math.max(1, parseInt(e.target.value) || 1)))
        }
        />
        <button
        onClick={() => setRoomCount((prev) => Math.min(15, prev + 1))}
        className="!px-2 !py-1 !bg-gray-300 !rounded"
        >
        +
        </button>
      </div>
      </div>

      {/* Adults Counter with Input */}
      <div className="!w-full !flex !items-center !justify-between gap-2">
      <label className="!text-sm font-medium">Adults:</label>
      <div className="flex items-center gap-2">
        <button
        onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
        className="!px-2 !py-1 !bg-gray-300 !rounded"
        >
        -
        </button>
        <input
        type="number"
        min="1"
        max={roomCount * 2}
        className="!w-16 !text-center !border !border-gray-300 !rounded-md !p-1 !text-sm"
        value={adults}
        onChange={(e) =>
          setAdults(Math.min(roomCount * 2, Math.max(1, parseInt(e.target.value) || 1)))
        }
        />
        <button
        onClick={() => setAdults((prev) => Math.min(roomCount * 2, prev + 1))}
        className="!px-2 !py-1 !bg-gray-300 !rounded"
        >
        +
        </button>
      </div>
      </div>

      {/* Children Counter with Input */}
      <div className="!w-full !flex !items-center !justify-between gap-2">
      <label className="!text-sm font-medium">Children:</label>
      <div className="flex items-center gap-2">
        <button
        onClick={() => setChildren((prev) => Math.max(0, prev - 1))}
        className="!px-2 !py-1 !bg-gray-300 !rounded"
        >
        -
        </button>
        <input
        type="number"
        min="0"
        max={Math.floor((adults / 2) * roomCount * 2)}
        className="!w-16 !text-center !border !border-gray-300 !rounded-md !p-1 !text-sm"
        value={children}
        onChange={(e) =>
          setChildren(
          Math.min(
            Math.floor((adults / 2) * roomCount * 2),
            Math.max(0, parseInt(e.target.value) || 0)
          )
          )
        }
        />
        <button
        onClick={() =>
          setChildren((prev) =>
          Math.min(Math.floor((adults / 2) * roomCount * 2), prev + 1)
          )
        }
        className="!px-2 !py-1 !bg-gray-300 !rounded"
        >
        +
        </button>
      </div>
      </div>

      <button
      className="!w-full !bg-blue-500 !text-white !py-2 !rounded-md hover:!bg-blue-600 !transition"
      onClick={handleBooking}
      >
      Search
      </button>
    </div>
    );
};

export default BookingEngineMobile;
