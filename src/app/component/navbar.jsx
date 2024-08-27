import Link from "next/link";

export default function Navbar() {
    return(
      <div className="container">
        <div className="d-flex justify-content-between align-items-center m-3">
      <div className="d-flex align-items-center">
        <img src="logo.png" alt="Logo" width={90} height={80} className="rounded-circle me-2" />
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
        <button className="d-sm-block d-lg-none ms-3 btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
          <img src="Group.svg" alt="Menu Icon" />
        </button>
      </div>

      {/* Offcanvas menu */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasMenu" aria-labelledby="offcanvasMenuLabel">
        <div className="offcanvas-header">
          <h5 id="offcanvasMenuLabel">Menü</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link text-dark" href="">Anasayfa</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" href="">Postlar</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" href="">İletişim</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    )
}