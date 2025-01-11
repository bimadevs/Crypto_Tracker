import { motion } from "motion/react";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { WordsIntro } from "@/data";

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center h-[40rem]">
        <p className="text-primary  text-base  mb-10">
          Semua pertanyaan bermula dari sini
        </p>
        <TypewriterEffect words={WordsIntro} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-40 h-10 rounded-xl bg-black border border-gray-300 border-transparent text-primary text-sm"
            onClick={() => {
              const cryptoElement = document.getElementById('learn-more');
              if (cryptoElement) {
                cryptoElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Learn More
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm"
            onClick={() => {
              const cryptoElement = document.getElementById('crypto');
              if (cryptoElement) {
                cryptoElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Search Crypto
          </motion.button>

        </div>
      </div>
    )
}