import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Asset } from "@/types";
import { useLocation } from "react-router-dom";
import { motion } from "motion/react";

import CardCrypto from "@/components/ui/card-crypto";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Link } from "react-router-dom";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Timeline } from "@/components/ui/timeline";
import { WorldMap } from "@/components/ui/world-map";

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

  const words = [
    {
      text: "Apa",
    },
    {
      text: "Itu",
    },
    {
      text: "Cryptocurrency?",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const content = [
    {
      title: "Apa itu cryptocurrency?",
      description:
        "Cryptocurrency adalah mata uang digital yang menggunakan teknologi blockchain untuk mencatat dan mengamankan transaksi. Berbeda dengan mata uang tradisional, crypto bersifat desentralisasi, artinya tidak dikontrol oleh pemerintah atau bank. Contoh populer termasuk Bitcoin, Ethereum, dan Binance Coin.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src="./assets/apa-itu-crypto.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Bagaimana Cara Kerja Crypto?",
      description:
        "Cryptocurrency beroperasi menggunakan blockchain, yaitu jaringan komputer yang mencatat semua transaksi secara transparan dan aman. Transaksi ini diverifikasi oleh banyak node dalam jaringan menggunakan mekanisme konsensus seperti Proof of Work (PoW) atau Proof of Stake (PoS). Hasilnya adalah sistem yang sulit dimanipulasi dan dapat diandalkan.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src="./assets/cara-kerja-crypto.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Keuntungan dan Risiko Crypto",
      description:
        `Cryptocurrency memiliki berbagai keuntungan, seperti transaksi yang cepat dan murah, kontrol penuh yang diberikan kepada pengguna melalui sistem desentralisasi, dan potensi pengembalian investasi yang tinggi. Namun, ada juga beberapa risiko yang perlu diperhatikan, seperti volatilitas harga yang tinggi, ancaman keamanan jika tidak menggunakan wallet yang tepat, dan regulasi yang berbeda di setiap negara yang dapat memengaruhi penggunaannya.`,
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src="./assets/keuntungan-dan-kerugian-crypto.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: "Tips Memulai dengan Crypto",
      description:
        "Mulailah dengan riset mendalam tentang crypto yang ingin dibeli dan gunakan platform terpercaya. Simpan aset di wallet yang aman, seperti hardware wallet, dan investasikan sesuai kemampuan finansialmu. Jangan pernah menginvestasikan lebih dari yang siap kamu kehilangan.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <img
            src="./assets/tips-memulai.jpeg"
            width={300}
            height={300}
            className="h-full w-full object-fit"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ];


  const data = [
    {
      title: "2008",
      content: (
        <div>
          <p className="text-primary text-xs md:text-sm font-normal mb-8">
            Konsep cryptocurrency diperkenalkan melalui whitepaper Bitcoin yang ditulis oleh Satoshi Nakamoto.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./assets/Satoshi_Nakamoto.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="./assets/satohi-1.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2009",
      content: (
        <div>
          <p className="text-primary text-xs md:text-sm font-normal mb-8">
            Bitcoin resmi diluncurkan, menjadi cryptocurrency pertama di dunia. Transaksi pertama dilakukan oleh Satoshi Nakamoto dan Hal Finney.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./assets/hal-finney.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="./assets/hal-finney.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2010",
      content: (
        <div>
          <p className="text-primary text-xs md:text-sm font-normal mb-8">
            Transaksi Bitcoin pertama untuk pembelian barang terjadi ketika 10.000 BTC digunakan untuk membeli dua pizza.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./assets/pizza-btc.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="./assets/pizza-btc-2.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2011",
      content: (
        <div>
          <p className="text-primary text-xs md:text-sm font-normal mb-8">
            Altcoin pertama, Litecoin, dirilis sebagai alternatif Bitcoin dengan transaksi yang lebih cepat.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./assets/altcoin.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="./assets/altcoin-2.webp"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2013",
      content: (
        <div>
          <p className="text-primary text-xs md:text-sm font-normal mb-8">
            Bitcoin mencapai nilai $1.000 untuk pertama kalinya, menarik perhatian investor global.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./assets/pertama-btc-naik.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="./assets/pertama-btc-naik-2.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2015",
      content: (
        <div>
          <p className="text-primary text-xs md:text-sm font-normal mb-8">
            Ethereum diluncurkan, membawa inovasi melalui smart contract yang membuka peluang aplikasi blockchain di luar transaksi keuangan.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./assets/etf.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="./assets/Eth.webp"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2017",
      content: (
        <div>
          <p className="text-primary text-xs md:text-sm font-normal mb-8">
            Popularitas crypto melonjak dengan Bitcoin mencapai hampir $20.000. Ini juga menjadi tahun booming untuk ICO (Initial Coin Offering).
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./assets/btc-melonjak.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="./assets/btc-melonjak-2.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="text-primary text-xs md:text-sm font-normal mb-8">
            Pandemi COVID-19 meningkatkan minat terhadap cryptocurrency sebagai aset digital, dengan Bitcoin mencapai nilai lebih dari $30.000 di akhir tahun.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./assets/btc-pandemi.webp"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="./assets/btc-pandemi-2.webp"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="text-primary text-xs md:text-sm font-normal mb-8">
            Bitcoin mencatat harga tertinggi sepanjang masa di atas $60.000, sementara NFT (Non-Fungible Token) menjadi tren baru di dunia blockchain.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./assets/nft.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="./assets/nft-2.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-primary text-xs md:text-sm font-normal mb-8">
            Adopsi crypto semakin luas dengan beberapa negara mengakui Bitcoin sebagai alat pembayaran legal, serta perkembangan lebih lanjut di sektor DeFi (Decentralized Finance).
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="./assets/defi.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="./assets/defi-2.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
          </div>
        </div>
      ),
    },

  ];


  return (
    <>
      <div className="flex flex-col items-center justify-center h-[40rem]">
        <p className="text-primary  text-base  mb-10">
          Semua pertanyaan bermula dari sini
        </p>
        <TypewriterEffect words={words} />
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

      <StickyScroll content={content} />


      <div className="w-full">
        <Timeline data={data} />
      </div>

      <div className=" py-40 bg-black w-full">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
            Saling{" "}
            <span className="text-neutral-400">
              {"Terhubung".split("").map((word, idx) => (
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

      <CardCrypto />
    </>
  );
}
