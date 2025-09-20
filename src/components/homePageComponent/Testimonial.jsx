import { useState } from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai"; // Import star icon

export function Testimonial() {
  const testimonialData = [
    {
      context_text:
        "Blue Bell combines comfort, beautiful views, excellent service, and good amenities, offering a perfect blend of relaxation and peace.",
      name: "Harsh Vardhan",
      rating: 5,
    },
    {
      context_text:
        "This is truly an untouched place to stay amidst breathtaking nature. The location of Blue Bell is simply wonderful. The staff is courteous and helpful although you won't find extensive cuisine. The food was freshly prepared and served hot. There wasn't any television and this was the best part. I loved this place and definitely want to go back again.",
      name: "SOUMYATA TRIPATHI",
      rating: 5,
    },
    {
      context_text:
        "This is very beautiful property. Our stay here is very comfortable. Staff is very cooperative. Food is good. We were in the lap of nature for three days. Cottage were very neat and clean. We also had great party time. I would like to come here again and again.",
      name: "Anupriya Niranjan",
      rating: 5,
    },
    {
      context_text:
        "I share my experience of 2 days stay with family at Blue Bell. It’s a very nice property located just in the lap of nature. Had lot of fun too. Comfortable stay, good food… Surely a place to visit again and again. Would love to stay for a longer duration.",
      name: "Rajeev Jindal",
      rating: 5,
    },
    {
      context_text:
        "Experience worth every penny spent. Amazing and relaxing vacation at Blue Bell. Hotel staff was cooperative and always available to help. Separate section for kids in the room was icing on the cake. Additionally, the whole team made sure we had the best New Year celebrations. Must recommend for a short and sweet stay with family.",
      rating: 5,
    },
    {
      context_text:
        "I am sharing my experience of two days stay. This place is in the lap of nature, very neat and clean, with cozy cottages like small cabins. Staff is very cooperative and honest. A very calm place for relaxation or meditation. Management is also good.",
      rating: 5,
    },
    {
      context_text:
        "Blue Bell is a calm and cozy property with a homely vibe. Rooms are simple but well-maintained, and the surroundings are peaceful. Staff was friendly and tried their best to make us comfortable. Food options were limited but tasty and fresh. Good place if you are looking for a quiet break away from the crowd.",
      name: "Amit Sharma",
      rating: 4,
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = testimonialData.length;

  function previous() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  function next() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  return (
    <div className="w-full flex justify-center">
      <section className="flex flex-col bg-white justify-center items-center w-full max-w-6xl px-4 py-12 sm:py-16 md:py-20">
        {/* Section Title and Write Review Link */}
        <div className="flex flex-col gap-4 items-center justify-between mb-8 px-2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center md:text-left">
            What Our Guests Say
          </h2>
          <a
            href="https://www.google.com/travel/search?q=kabana%20de%20nature%20reviews&g2lb=4965990%2C4969803%2C72302247%2C72317059%2C72414906%2C72471280%2C72472051%2C72485658%2C72560029%2C72573224%2C72616120%2C72647020%2C72648289%2C72686036%2C72760082%2C72803964%2C72832976%2C72882230%2C72948662%2C72958624%2C72959983%2C72972044%2C72990341%2C73021391%2C73027856%2C73033558&hl=en-IN&gl=in&ssta=1&ts=CAEaRwopEicyJTB4MzkwZjdiMDVlNzk5NzE2ZjoweGY3OGY3Nzc5NGE2YzViMTMSGhIUCgcI6Q8QBxgaEgcI6Q8QBxgbGAEyAhAA&qs=CAEyFENnc0lrN2F4MDVUdjNjZjNBUkFCOAJCCQkTW2xKeXeP90IJCRNbbEp5d4_3&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiA2KuttNWOAxUAAAAAHQAAAAAQEg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-btn underline text-sm hover:text-btn-secondary transition mt-4 md:mt-0"
          >
            Write a Review on Google
          </a>
        </div>

        <div className="w-full max-w-5xl mx-auto font-comic">
          {/* Testimonials Grid */}
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {[testimonialData[current], testimonialData[(current + 1) % length]].map((item, index) => (
              <div
                key={index}
                className="flex flex-col max-w-md w-full bg-white shadow-md p-6 rounded-md border border-gray-200"
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-4">
                  <BiMessageRoundedDetail className="text-btn h-8 w-8 md:h-10 md:w-10" />
                </div>

                {/* Testimonial Text */}
                <div className="text-center mb-4">
                  <p className="text-gray-700 text-sm md:text-base italic">"{item.context_text}"</p>
                </div>

                {/* User Info */}
                <div className="text-center mb-2">
                  <h6 className="text-md md:text-lg font-medium text-gray-900">{item.name}</h6>
                </div>

                {/* Star Ratings */}
                <div className="flex justify-center mb-2">
                  {Array.from({ length: Math.floor(item.rating) }).map((_, i) => (
                    <AiFillStar key={i} className="text-yellow-500 h-5 w-5" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={previous}
              className="p-2 rounded-full bg-btn text-white hover:bg-btn-secondary transition duration-300 focus:outline-none focus:ring-2 focus:bg-btn-secondary"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-btn text-white hover:bg-btn-secondary transition duration-300 focus:outline-none focus:ring-2 focus:bg-btn-secondary"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonialData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${idx === current ? 'bg-btn w-4 bg-black' : 'bg-gray-800'
                  }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );

}