import { BackgroundCellAnimation } from "@/components/animata/background/background";
import Hero from "@/components/ui/Animatedbeams";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header
        className="relative w-full flex items-center justify-center overflow-hidden 
        bg-[radial-gradient(50%_50%_at_50%_50%,#4a0979_0%,#5f0000_50%,rgba(139,0,255,0)_100%)]"
        aria-label="Hero Section"
      >
        <Hero />
      </header>

      {/* Main Content Section */}
      <main aria-label="Main Content">
        <section className="relative -mt-10 w-full min-h-screen bg-black text-white">
          {/* Background Animation */}
          <div className="absolute inset-0">
            <BackgroundCellAnimation />
          </div>

          {/* Content */}

        </section>
        <section className="relative -mt-60 w-full min-h-screen bg-black text-white">
          {/* Background Animation */}


          {/* Content */}

        </section>
      </main>
    </>
  );
}

