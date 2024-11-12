'use client'
import Jumbotron from "@/app/components/User/Jumbotron";
import Highlights from "@/app/components/User/Highlights";
import Tentang from "@/app/components/User/Tentang";
import TipeKamar from "@/app/components/User/TipeKamar";
import Fasilitas from "@/app/components/User/Fasilitas";
import Galeri from "@/app/components/User/Gallery";
import Testimoni from "@/app/components/User/Testimoni";
import Artikel from "@/app/components/User/Artikel";
import Faq from "@/app/components/User/Faq";

function Beranda() {
  return (
    <>
      <div id="beranda">
        <Jumbotron />
      </div>
      <div id="">
        <Highlights />
      </div>
      <div id="tentang">
        <Tentang />
      </div>
      <div id="tipe-kamar">
        <TipeKamar />
      </div>
      <div id="fasilitas">
        <Fasilitas />
      </div>
      <div id="galeri">
        <Galeri />
      </div>
      <div id="testimoni">
        <Testimoni />
      </div>
      <div id="artikel">
        <Artikel />
      </div>
      <div id="faq">
        <Faq />
      </div>
    </>
  );
}

export default Beranda;
