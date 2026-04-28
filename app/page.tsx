import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Transformations from "@/components/Transformations";

import CTA from "@/components/CTA";
import Process from "@/components/Process";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Stats /> */}
      <Programs />
      <Transformations />
      <Process />
      <CTA />
    </>
  );
}