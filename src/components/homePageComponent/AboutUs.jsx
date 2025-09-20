import { TiTick } from "react-icons/ti";

export function AboutUs() {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-40">
      <div className="text-center font-sans">
        <h1 className="text-3xl font-light mb-8">ABOUT US</h1>
        <div className="text-left font-light text-sm md:text-base lg:text-lg leading-relaxed">
          <p>
            Welcome to <strong>Blue Bell Homestay</strong>, your serene getaway located at
            <strong> Bhaje Rd, Bhaje, Malawali, Maharashtra 410405</strong>. Surrounded by lush greenery, rolling hills,
            and the timeless charm of Lonavala’s countryside, our homestay offers a peaceful escape from the
            hustle and bustle of city life. Whether you’re traveling with family, friends, or seeking a quiet retreat,
            Blue Bell Homestay is designed to make you feel right at home.
          </p>
          <br />
          <p>
            With cozy rooms, warm hospitality, and easy access to popular attractions like Bhaja Caves, Lohagad Fort,
            and Pawna Lake, our homestay is the perfect base for your vacation. From sipping tea on a breezy balcony
            to gathering around for laughter-filled evenings, every moment here is meant to be cherished.
          </p>
          <br />
          <div className="px-4 md:px-8 lg:px-10 pb-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <ul className="list-disc list-inside">
                <li>Close to Bhaja & Karla Caves</li>
                <li>Scenic views of hills & greenery</li>
                <li>Ideal for families & group stays</li>
              </ul>
              <ul className="list-disc list-inside">
                <li>Evening chai with mountain breeze</li>
                <li>Peaceful surroundings</li>
                <li>Warm, homely hospitality</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
