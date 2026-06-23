import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ApplyForm } from "@/components/sections/ApplyForm";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Fit } from "@/components/sections/Fit";
import { Hero } from "@/components/sections/Hero";
import { How } from "@/components/sections/How";
import { Numbers } from "@/components/sections/Numbers";

export default function Home() {
  return (
    <div id="top" className="flex min-h-dvh flex-col bg-black">
      <Header />
      <main className="flex-1">
        <Hero />
        <Fit />
        <Numbers />
        <How />
        <FAQ />
        <FinalCTA />
        <ApplyForm />
      </main>
      <Footer />
    </div>
  );
}
