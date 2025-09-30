import Marquee from "react-fast-marquee";

const keywords = ["Designer", "Developer", "Creative", "Problem Solver"];

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4 sm:w-6 sm:h-6 md:w-10 md:h-10 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-white flex-shrink-0"
  >
    <path d="M12 2L15 9l7 3-7 3-3 7-3-7-7-3 7-3z" />
  </svg>
);

const Banner = () => {
  return (
    <div className="py-4 md:py-16 lg:py-20 overflow-hidden">
      <Marquee
        gradient={false}
        speed={40}
        direction="right" // ✅ moves left → right
        pauseOnHover={true}
        className="py-4"
      >
        {Array.from({ length: 2 }).map((_, idx) => (
          <div key={idx} className="flex items-center space-x-6 sm:space-x-10 mr-8">
            {keywords.map((word, i) => (
              <div key={i} className="flex items-center space-x-4 sm:space-x-6">
                <span className="text-2xl md:text-4xl lg:text-6xl xl:text-[100px] font-bold text-white">
                  {word}
                </span>
                {i !== keywords.length - 1 && <StarIcon />}
              </div>
            ))}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Banner;
