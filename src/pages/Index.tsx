import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Timeline } from "@/components/ui/timeline";
import { content, data } from "@/data";
import { motion, useSpring, useScroll } from "motion/react";

import CardCrypto from "@/components/ui/card-crypto";
import Hero from "@/components/Hero";
import Globe from "@/components/Globe";

export default function Index() {

  const location = useLocation();

  useEffect(() => {
    // Ambil hash dari URL (contoh: #crypto)
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1)); // Hapus '#' dari hash
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Scroll ke elemen dengan ID yang sesuai
      }
    }
  }, [location]); // Jalankan ulang efek saat hash berubah

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      <motion.div
      className="z-50"

        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          originX: 0,
          background: "#0f80e9",
        }}
      />
      <Hero />
      <StickyScroll content={content} />
      <Timeline data={data} />
      <Globe />
      <CardCrypto />
    </>
  );
}
