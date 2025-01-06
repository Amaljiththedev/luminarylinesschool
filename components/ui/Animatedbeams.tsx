import AnimatedBeam from "../animata/background/animated-beam";
import Starfield from "../animata/background/stars";

const Hero = () => (
  <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
    {/* Background Layers */}
    <AnimatedBeam className="absolute inset-0 z-0">
      {/* Starfield */}
      <div className="absolute inset-0">
        <Starfield />
      </div>

      {/* Radial Gradient */}
      <div
        style={{
          background:
            "radial-gradient(circle at center, rgba(64, 0, 0, 1) 0%, rgba(50, 0, 0, 1) 30%, rgba(20, 0, 0, 0) 70%);",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="absolute inset-0 h-full w-full opacity-60"
      />

      {/* Linear Gradient for Transition */}
      <div
        style={{
          background: "linear-gradient(to bottom, transparent, black 80%)",
        }}
        className="absolute inset-0 h-full w-full z-10"
      />
    </AnimatedBeam>

    {/* Hero Content */}
    <div className="relative z-20 flex flex-col items-center text-center text-white px-6 -mt-20 sm:-mt-10">
      <p className="text-lg md:text-xl font-poppins mb-4 text-gray-300">
        Take your skills{" "}
        <span className="bg-gradient-to-r from-white via-red-500 to-cyan-500 bg-clip-text font-extrabold text-transparent">
          From Beginner to Pro
        </span>{" "}
        in just 3 months
      </p>

      <h1 className="md:text-2xl lg:text-7xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 pointer-events-none">
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
        <button className="relative animate-shimmer rounded-lg bg-black px-7 py-4 text-white border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Join The Waitlist
        </button>
      </div>
    </div>


  </div>
);

export default Hero;
