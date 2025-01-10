import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Asset } from "@/types";
import { useLocation } from "react-router-dom";

import CardCrypto from "@/components/ui/card-crypto";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Link } from "react-router-dom";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { Timeline } from "@/components/ui/timeline";

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
      <div className="flex flex-col items-center justify-center h-[40rem] ">
        <p className="text-primary  text-base  mb-10">
          Semua pertanyaan bermula dari sini
        </p>
        <TypewriterEffect words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
          <button className="w-40 h-10 rounded-xl bg-black border border-gray-300 border-transparent text-primary text-sm">
            Learn More
          </button>
          <button
            className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm"
            onClick={() => {
              const cryptoElement = document.getElementById('crypto');
              if (cryptoElement) {
                cryptoElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Search Crypto
          </button>

        </div>
      </div>

      <div className="">
        <StickyScroll content={content} />
      </div>

      <div className="w-full">
        <Timeline data={data} />
      </div>

      <CardCrypto />
    </>
  );
}
