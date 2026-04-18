"use client";
import { content } from "@/assets/content";
import Chapter from "@/components/section";
import Hero from "@/components/section/Hero";
import Contact from "@/components/section/Contact";
import SubscribeForm from "@/components/SubscribeForm";

export default function Home() {
  return (
    <div>
      <Hero />
      <Chapter key={"about"} content={content["about"]} index={0} />
      <SubscribeForm />
      <Chapter key={"yoga"} content={content["yoga"]} index={1} />
      <Chapter key={"coaching"} content={content["coaching"]} index={2} />
      <Chapter key={"oils"} content={content["oils"]} index={3} />

      <Contact />
    </div>
  );
}
