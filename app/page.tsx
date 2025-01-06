import { BackgroundCellAnimation } from "@/components/animata/background/background";
import { GlareCardDemo } from "@/components/animata/background/glarecard";
import Hero from "@/components/ui/Animatedbeams";

export default function Home() {
  return (
    <>
      {/* Main Content Section */}
      <main aria-label="Main Content">
        {/* Hero Section */}
        <section className="relative w-full bg-gradient-to-b from-purple-800 via-red-800 to-black text-white flex items-center justify-center -mb-44">
          <Hero />
        </section>

        {/* BackgroundCellAnimation Section */}
        <section className="relative w-full bg-black text-white flex items-center justify-center py-8">
          <div className="relative z-10">
            <BackgroundCellAnimation />
          </div>
        </section>

        {/* GlareCardDemo Section */}
        <section className="relative w-full bg-black text-white flex items-center justify-center py-16">
          <div className="relative z-10">
            <GlareCardDemo />
          </div>
        </section>
      </main>
    </>
  );
}
