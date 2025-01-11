import {  useEffect } from "react";
import { useLocation } from "react-router-dom";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Timeline } from "@/components/ui/timeline";
import { content, data } from "@/data";

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

  return (
    <>
      <Hero />
      <StickyScroll content={content} />
      <Timeline data={data} />
      <Globe />
      <CardCrypto />
    </>
  );
}
