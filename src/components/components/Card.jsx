import React from 'react';

const Card = ({ product }) => {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-md p-6 mb-4">
      <img src={`imagen${product.id}.jpg`} alt={product.name} className="mb-4 rounded-lg" />
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-lg font-semibold">${product.price}</p>
    </div>
  );
};

export default Card;