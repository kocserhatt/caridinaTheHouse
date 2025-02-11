"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import data from '../Json/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/app/header.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [bootstrap, setBootstrap] = useState(null);

  // Bootstrap JS'i dinamik olarak yüklemek
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then((bootstrapModule) => {
        setBootstrap(bootstrapModule);  // Bootstrap modülünü state'e alıyoruz
      })
      .catch((err) => console.error("Bootstrap JS yüklenemedi: ", err));
  }, []);

  const handleMenuOpen = () => {
    setIsOpen(true);
    document.body.classList.add('offcanvas-open'); // Body'ye 'offcanvas-open' sınıfını ekle
  };

  const handleMenuClose = () => {
    setIsOpen(false);
    if (bootstrap) {
      const offcanvasElement = document.getElementById('offcanvasMenu');
      const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement) || new bootstrap.Offcanvas(offcanvasElement); // Bootstrap Offcanvas'ı burada kullanabiliriz
      offcanvas.hide(); // Offcanvas'ı kapama işlemi
      offcanvasElement.classList.remove('show'); // Offcanvas'tan 'show' sınıfını kaldır
      const backdrop = document.querySelector('.offcanvas-backdrop');
      if (backdrop) {
        backdrop.classList.remove('show'); // Karartıdan 'show' sınıfını kaldır
        if (backdrop.parentNode) {
          backdrop.parentNode.removeChild(backdrop); // Karartı elementini DOM'dan kaldır
        }
      }
      document.body.classList.remove('offcanvas-open'); // Body'den 'offcanvas-open' sınıfını kaldır
    }
  };

  const handlePostDropdownClick = (e) => {
    e.stopPropagation(); // Menü kapanmasın
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center m-3">
        <div className="d-flex align-items-center justify-content-start">
          {/* <a href="/"><img src="/logo.png" alt="Logo" className="mb-2 logo" /></a> */}
          <a href="/" className="caridina">CaridinaTheHouse</a>
        </div>

        <div className="d-flex align-items-center">
          {/* Desktop navigation */}
          <nav className="d-none d-lg-flex gap-3">
            <Link className="nav-link text-dark" href="/" onClick={handleMenuClose}>Anasayfa</Link>
            <Link className="nav-link text-dark" href="#post" onClick={handleMenuClose}>Karidesler Hakkında</Link>
            <Link className="nav-link text-dark" href="#iletisim" onClick={handleMenuClose}>İletişim</Link>
          </nav>
          {/* Mobile button */}
          <button 
            className="d-sm-block d-lg-none border-0 bg-transparent" 
            data-bs-toggle="offcanvas" 
            data-bs-target="#offcanvasMenu"
            onClick={handleMenuOpen}
          >
            <img src="/Group.svg" alt="Menu Icon" />
          </button>
        </div>

        {/* Offcanvas menu */}
        <div className={`offcanvas offcanvas-end ${isOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
          <div className="offcanvas-header">
            <div className="d-flex align-items-center">
              <h1 className="fs-4 fs-md-3 fs-lg-2 mb-0">CaridinaTheHouse</h1>
            </div>
            <button 
              type="button" 
              className="btn-close" 
              data-bs-dismiss="offcanvas" 
              aria-label="Close" 
              onClick={handleMenuClose}
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link text-dark" href="/" onClick={handleMenuClose}>Anasayfa</Link>
              </li>
              <li className="nav-item dropdown">
                <Link 
                  className="nav-link text-dark dropdown-toggle" 
                  href="#" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false" 
                  onClick={handlePostDropdownClick}
                >
                  Postlar
                </Link>
                <div className="dropdown-menu">
                  <div className="d-flex gap-3 flex-column">
                    {data.map((product, index) => (
                      <div className="" key={index}>
                        <div className="">
                          <div className="">
                            <Link href={`/post/${product.slug}`} legacyBehavior>
                              <a className="text-decoration-none text-dark" onClick={handleMenuClose}> 
                                <img src="/right-arrow.png" alt="" width={12} height={12} /> 
                                {product.title}
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" href="#iletisim" onClick={handleMenuClose}>İletişim</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}