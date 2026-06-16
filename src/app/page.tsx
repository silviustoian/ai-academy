import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Fit } from "@/components/sections/Fit";
import { Hero } from "@/components/sections/Hero";
import { How } from "@/components/sections/How";
import { Learn } from "@/components/sections/Learn";
import { Mentors } from "@/components/sections/Mentors";
import { Outcomes } from "@/components/sections/Outcomes";

export default function Home() {
  return (
    <div id="top" className="flex min-h-dvh flex-col bg-black">
      <Header />
      <main className="flex-1">
        <Hero />
        <Fit />
        <Learn />
        <Mentors />
        <How />
        <Outcomes />
      </main>
      <Footer />
    </div>
  );
}
