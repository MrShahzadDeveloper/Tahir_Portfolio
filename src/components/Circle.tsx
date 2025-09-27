import React from "react";

const Circle = () => {
  return (
    <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] rounded-full pointer-events-none">
      {/* Inner subtle glow using multiple layers */}
      <div className="absolute w-full h-full rounded-full bg-[#C9F31D] opacity-25 filter blur-[20px] sm:blur-[30px] md:blur-[40px] lg:blur-[50px]" />
      <div className="absolute w-full h-full rounded-full bg-[#C9F31D] opacity-15 filter blur-[40px] sm:blur-[50px] md:blur-[70px] lg:blur-[90px]" />
      <div className="absolute w-full h-full rounded-full bg-[#C9F31D] opacity-10 filter blur-[80px] sm:blur-[100px] md:blur-[120px] lg:blur-[150px]" />
    </div>
  );
};

export default Circle;
