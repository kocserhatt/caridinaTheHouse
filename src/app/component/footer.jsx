import Link from 'next/link';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return(
        <>
        <div id='iletisim'></div>
        <footer className="py-4 mt-4 mb-2">
            <div className="container">
              <div className="row">
                {/* Logo ve Site Adı */}
                <div className="col-12 text-center mb-4">
                  <img src="/logo.png" alt="Logo" width={90} height={80} className="mb-2" />
                  <h1 className="h3 mb-0 text-dark">CaridinaTheHouse</h1>
                </div>
    
                {/* Sosyal Medya ve İletişim */}
                <div className="col-md-6 d-flex flex-column flex-md-row align-items-center  mb-4 mb-md-0">
                  <Link href="https://www.instagram.com/caridinathehouse/" target='_blank' className="text-dark me-3 d-flex align-items-center" aria-label="Instagram">
                    <FaInstagram size={24} className="me-2" />
                    <span>Instagram hesabımızı ziyaret edin</span>
                  </Link>
                  <Link href="mailto:selimkocesved@gmail.com" className="text-dark d-flex align-items-center" aria-label="Email">
                    <FaEnvelope size={24} className="me-2" />
                    <span>Bana ulaşın</span>
                  </Link>
                </div>
    
                {/* Site Bilgileri */}
                <div className="col-md-6 text-center text-md-end">
                  <p className="text-dark">&copy; 2024 CaridinaTheHouse. Tüm Hakları Saklıdır.</p>
                </div>
              </div>
            </div>
          </footer>
          </>
    )
}