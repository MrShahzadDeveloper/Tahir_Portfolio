import Image from "next/image";

const ProjectDetailCircle = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Circle border with image inside */}
      <div className="p-8 border rounded-full border-[#575757] relative z-10 flex items-center justify-center">
        <Image width={40} height={40} src="/arrow.svg" alt="App Developer" />
      </div>

      {/* Circular text outside border */}
      <svg
        className="absolute w-[180px] h-[180px]" // bigger than the inner circle
        viewBox="0 0 300 300"
      >
        <defs>
          <path
            id="outerCirclePath"
            d="M 150,150 m -120,0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
          />
        </defs>
        <text
          fill="#ffffff"
          fontSize="18"
          fontWeight="bold"
          letterSpacing="6"
        >
          <textPath href="#outerCirclePath" startOffset="0%">
            APP - WEB - DEVELOPER 
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default ProjectDetailCircle;
