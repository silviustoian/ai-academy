import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Academy } from "@/components/sections/Academy";
import { Audience } from "@/components/sections/Audience";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";

export default function Home() {
  return (
    <div id="top" className="flex min-h-dvh flex-col bg-black">
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Academy />
        <Audience />
      </main>
      <Footer />
    </div>
  );
}
