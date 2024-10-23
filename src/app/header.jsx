"use client";

import { useEffect } from "react";
import "./header.css";
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS sadece stil amaçlı, sunucu tarafında da yüklenebilir.

export function Header() {
  useEffect(() => {
    // Bu kod sadece tarayıcıda çalışacak
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  return (
    <>
    <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4900925252983916"
            crossorigin="anonymous"></script>
      </Head>
      <div id="carouselExample" className="carousel slide" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img3.jpg" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="/img1.jpg" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="/img2.jpg" className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container mb-5 mt-5">
        <div id="anasayfa" className="home">
          <div className="left">
            <h1 className="home-header">Karidesler Hakkında;</h1>
            <p className="home-paragraph">Canlı renkleri ve balık türlerine göre ilgi çekici olan hareketleri ile karidesler akvaryum için cazip gelen canlılardır. Nitekim karideslerin bakımı da balıklara göre daha fazla özen ister. Fakat akvaryumunuza katkıları da oldukça fazladır. Bu nedenle karidesler akvaryumlar için sıkça tercih edilen mükemmel canlılardır.</p>
          </div>
        </div>
      </div>
    </>
  );
}
