import AnimatedBeam from "../animata/background/animated-beam";
import Starfield from "../animata/background/stars";

const Hero = () => (
  <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
    {/* Animated Beam with Starfield */}
    <AnimatedBeam className="absolute inset-0 z-0">
      <div className="absolute inset-0">
        <Starfield />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 -mt-32 sm:-mt-20">
        {/* Hero Content */}
        <p className="text-lg md:text-xl font-poppins mb-4 text-gray-300">
          Take your skills{" "}
          <span className="bg-gradient-to-r from-white via-red-500 to-cyan-500 bg-clip-text font-extrabold text-transparent">
            From Beginner to Pro
          </span>{" "}
          in just 3 months
        </p>

        <h1 className="md:text-2xl lg:text-7xl font-medium text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 pointer-events-none">
          Master Video Editing
          <br className="hidden md:inline" />
          The Ultimate Career-Oriented Cohort
        </h1>
        <p className="text-md md:text-lg font-sans mb-8 text-gray-200">
          Over{" "}
          <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent font-semibold">
            3000+
          </span>{" "}
          Students Trained,{" "}
          <strong className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            85% Average Placement Rate*
          </strong>
        </p>

        {/* Waitlist Button */}
        <div className="group relative">
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
          <button className="relative rounded-lg bg-black px-7 py-4 text-white">
            Join The Waitlist
          </button>
        </div>
      </div>
    </AnimatedBeam>
  </div>
);

export default Hero;
