import data from '../../Json/data.json';
import { notFound } from 'next/navigation';

export default function ProductDetailsPage({ params }) {
    const { slug } = params;
    const product = data.find(item => item.slug === slug);

    if (!product) {
        return notFound();
    }

    return (
        <div className="container my-5">
            <div className="text-center">
                <h1 className="mb-4" style={{ fontSize: '2.5rem', color: '#333' }}>{product.title}</h1>
                <img 
                    src={product.images[0]} 
                    alt={product.title} 
                    className="img-fluid" 
                    style={{ 
                        maxWidth: '80%', // Genişliği sınırlama
                        height: 'auto', 
                        borderRadius: '8px', 
                        marginBottom: '20px', 
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)' // Hafif gölge efekti
                    }} 
                />
                <p style={{ 
                    fontSize: '1rem', 
                    lineHeight: '1.6', 
                    color: '#555' 
                }}>
                    {product.description}
                </p>
            </div>
        </div>
    );
}
