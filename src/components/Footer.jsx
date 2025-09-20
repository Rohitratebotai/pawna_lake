import { FaShieldAlt, FaFileContract, FaUndoAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-[#42c0b6] text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm">
        {/* Left Section */}
        <div className="flex flex-col md:items-start">
          <p className="opacity-90 mb-1">
            © <span className="font-medium">Blue Bell</span>. All Rights Reserved.
          </p>
          <p className="opacity-90">
            Powered by:{" "}
            <a
              href="https://ratebotai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b-2 border-transparent hover:border-btn-secondary hover:text-btn-secondary transition duration-300 px-1"
            >
              Ratebot Ai
            </a>
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <button
            onClick={() => navigate("privacy-policy")}
            className="flex items-center gap-2 text-white transition duration-200"
          >
            <FaShieldAlt className="text-base" />
            <span className="font-medium">Privacy Policy</span>
          </button>
          <button
            onClick={() => navigate("terms-and-conditions")}
            className="flex items-center gap-2 text-white transition duration-200"
          >
            <FaFileContract className="text-base" />
            <span className="font-medium">Terms & Conditions</span>
          </button>
          <button
            onClick={() => navigate("cancellation-and-refund-policy")}
            className="flex items-center gap-2 text-white transition duration-200"
          >
            <FaUndoAlt className="text-base" />
            <span className="font-medium">Refund Policy</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
