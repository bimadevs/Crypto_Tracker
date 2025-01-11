import { WorldMap } from "./ui/world-map";
import { motion } from "motion/react";

export default function Globe() {
    return (
        <div className=" py-40 bg-black w-full">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
            Blockchain sebagai{" "}
            <span className="text-neutral-400">
              {"Penghubung".split("").map((word, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </p>
          <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
            Blockchain sendiri merupakan sebuah sistem komputasi yang mendasari terbentuknya aset kripto yang ada saat ini. Secara fungsi, blockchain hadir untuk blok yang saling terhubung satu sama lain yang mencatat transaksi aset dan jaringan bisnis secara online. Tidak hanya mencatat, blockchain juga mendistribusikan informasi transaksi yang terjadi di seluruh dunia kepada pemilik mata uang kripto yang ingin melihatnya. Namun informasi tersebut bersifat rahasia dan hanya memunculkan kode sebagai identitas pelaku transaksi.
          </p>
        </div>
        <WorldMap
          dots={[
            {
              start: {
                lat: 64.2008,
                lng: -149.4937,
              }, // Alaska (Fairbanks)
              end: {
                lat: 34.0522,
                lng: -118.2437,
              }, // Los Angeles
            },
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
              end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            },
            {
              start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
            },
            {
              start: { lat: 38.7223, lng: -9.1393 }, // Lisbon
              end: { lat: 51.5074, lng: -0.1278 }, // London
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 28.6139, lng: 77.209 }, // New Delhi
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            },
            {
              start: { lat: -6.1750, lng: 106.8275 }, // Jakarta
              end: { lat: 28.6139, lng: 77.209 }, // New Delhi
            },
            {
              start: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
              end: { lat: -6.1750, lng: 106.8275 }, // Jakarta
            },
          ]}
        />
      </div>
    )
}