"use client";
import { content, sectionIds } from "@/assets/content";
import Chapter from "@/components/section";
import Hero from "@/components/section/Hero";
import Impressum from "@/components/section/Impressum";

export default function Home() {
  return (
    <div>
      <Hero />
      {sectionIds.map((id, index) => (
        <Chapter key={id} content={content[id]} index={index} />
      ))}

      <Impressum />
    </div>
  );
}
