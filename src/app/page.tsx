"use client";
import About from "@/components/sections/About";
import Coaching from "@/components/sections/Coaching";
import Hero from "@/components/sections/Hero";
import Impressum from "@/components/sections/Impressum";
import Offer from "@/components/sections/Offer";
import Oils from "@/components/sections/Oils";
import Yoga from "@/components/sections/Yoga";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Yoga />
      <Coaching />
      <Oils />
      <Offer />
      <Impressum />
    </div>
  );
}
