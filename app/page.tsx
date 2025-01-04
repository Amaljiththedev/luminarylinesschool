import Allfaves from "@/components/animata/background/Allfaves";
import Hero from "@/components/ui/Animatedbeams";
import { MovingLine } from "@/components/animata/background/moving";
import { BackgroundCellAnimation } from "@/components/animata/background/BackgroundRippleeffect";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative w-full -mb-52 flex items-center justify-center overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,#4a0979_0%,#5f0000_50%,rgba(139,0,255,0)_100%)]">
        <Hero />
      </header>

      {/* Main Content */}
      <main className="relative w-full h-full bg-black">
        <BackgroundCellAnimation/>
      </main>
    </>
  );
}
