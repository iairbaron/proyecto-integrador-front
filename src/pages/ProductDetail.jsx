import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state.product;

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <>
    <h1>Aca va el componente de galeria de foto</h1>
    
    <div className="product-detail">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
      </div>
    </div>

    </>
  );
};

export default ProductDetail;
