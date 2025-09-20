// import img from '../../assets/homePageImages/home-page.jpeg'

export function ParallaxEffect({ img, children, height = "h-[100vh]" }) {
  return (
    <div
      className={`relative ${height} flex flex-col items-center justify-center bg-cover bg-center bg-fixed overflow-hidden`}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {/* Foreground Content */}
      <div className="text-center px-4 sm:px-6 md:px-10 relative z-10">{children}</div>
    </div>
  );
}