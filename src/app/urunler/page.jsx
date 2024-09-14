import Link from 'next/link';
import { Header } from '../header';
import data from '../Json/data.json';

export default function ProductPage() {
  return (
    <>
      <Header />
      <div id='pots'></div>
      <div className="container">
        <div className="row g-3">
          {data.map((product, index) => (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <div className="card h-100">
                <img
                  src={product.images[0]}
                  className="card-img-top"
                  alt={product.title}
                  style={{ objectFit: 'cover', height: '200px' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <Link href={`/urunler/${product.slug}`} legacyBehavior>
                    <a className="btn btn-primary">Detayı Göster</a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
