"use client";

import Link from "next/link";
import { useEffect } from "react";
import data from '../Json/data.json';

export default function Navbar() {
  useEffect(() => {
    // Bu kod sadece tarayıcıda çalışacak
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);
  
    return(
      <div className="container">
        <div className="d-flex justify-content-between align-items-center m-3">
      <div className="d-flex align-items-center">
        <img src="/logo.png" alt="Logo" width={90} height={80} className="mb-2" />
        <h1 className="fs-4 fs-md-3 fs-lg-2 mb-0">CaridinaTheHouse</h1>
      </div>
      <div className="d-flex align-items-center">
        {/* Desktop navigation */}
        <nav className="d-none d-lg-flex gap-3">
          <Link className="nav-link text-dark" href="/">Anasayfa</Link>
          <Link className="nav-link text-dark" href="#pots">Postlar</Link>
          <Link className="nav-link text-dark" href="#iletisim">İletişim</Link>
        </nav>
        {/* Mobile button */}
        <button className="d-sm-block d-lg-none border-0 bg-transparent" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
          <img src="/Group.svg" alt="Menu Icon" />
        </button>
      </div>

      {/* Offcanvas menu */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
        <div className="offcanvas-header">
        <div className="d-flex align-items-center">
        <h1 className="fs-4 fs-md-3 fs-lg-2 mb-0">CaridinaTheHouse</h1>
      </div>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link text-dark" href="/">Anasayfa</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link text-dark dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">Postlar</Link>
              <div className="dropdown-menu ">
                <div className="d-flex gap-3 flex-column">
                  {data.map((product, index) => (
                    <div className="" key={index}>
                      <div className="">
                        <div className="">
                          <Link href={`/urunler/${product.slug}`} legacyBehavior>
                            <a className="text-decoration-none text-dark"> <img src="/right-arrow.png" alt="" width={12} height={12} /> {product.title}</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" href="#iletisim">İletişim</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    )
}