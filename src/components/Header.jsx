import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // For smooth scrolling

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get current route

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScroll);
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScrollOffset = (el) => {
    const yOffset = -70; // Adjust this based on your navbar height
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`
          fixed left-0 top-0 w-full z-[100] transition-all duration-300
         bg-[var(--color-nav-fixed)]
          shadow-md
        `}
      >
        <div className="text-white w-full font-poppins">
          <div className="!container !flex !h-16 !justify-between !items-center !mx-auto !px-4 !py-4">

            {/* Hamburger Menu (Left Side on Mobile) */}
            <button
              className="text-white md:!hidden focus:!outline-none"
              onClick={toggleMenu}
              aria-label="Toggle-menu"
            >
              {isMenuOpen ? <FaTimes className="!h-6 !w-6" /> : <FaBars className="h-6 w-6" />}
            </button>

            {/* Desktop Navbar */}
            <nav className="!flex-1 !justify-center text-lg cursor-pointer !gap-5 hidden lg:!gap-10 lg:!text-xl md:!flex">
              <HashLink smooth to="/#top" onClick={closeMenu} scroll={handleScrollOffset} className="cursor-pointer">
                Home
              </HashLink>
              <HashLink smooth to="/#aboutus" onClick={closeMenu} scroll={handleScrollOffset} className="cursor-pointer">
                About Us
              </HashLink>
              <HashLink smooth to="/#accommodation" onClick={closeMenu} scroll={handleScrollOffset} className="cursor-pointer">
                Accommodation
              </HashLink>
              <HashLink smooth to="/#gallery" onClick={closeMenu} scroll={handleScrollOffset} className="cursor-pointer">
                Gallery
              </HashLink>
              <HashLink smooth to="/#contact" onClick={closeMenu} scroll={handleScrollOffset} className="cursor-pointer">
                Contact Us
              </HashLink>
            </nav>

            {isMenuOpen && location.pathname !== "" && (
              <div className="md:!hidden">
                <a
                  href="https://booking.kabanadenatureresort.com/hotel/hotel-details?hotel_id=96"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="px-4 py-2 bg-white text-black rounded-lg text-sm"
                >
                  Book Now
                </a>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:!block !fixed !inset-0 bg-[var(--color-primary)] !pt-16 !z-[99]">
          <div className="!flex !flex-col !items-center !pt-10 !space-y-10 !text-xl">
            <HashLink smooth to="/#top" onClick={closeMenu} scroll={handleScrollOffset} className="text-white">
              Home
            </HashLink>
            <HashLink smooth to="/#aboutus" onClick={closeMenu} scroll={handleScrollOffset} className="text-white">
              About Us
            </HashLink>
            <HashLink smooth to="/#accommodation" onClick={closeMenu} scroll={handleScrollOffset} className="text-white">
              Accommodation
            </HashLink>
            <HashLink smooth to="/#gallery" onClick={closeMenu} scroll={handleScrollOffset} className="text-white">
              Gallery
            </HashLink>
            <HashLink smooth to="/#contact" onClick={closeMenu} scroll={handleScrollOffset} className="text-white">
              Contact Us
            </HashLink>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
