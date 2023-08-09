import React from 'react';

const Card = ({ product }) => {
  return (
    <div className="flex items-center bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="mr-4">
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p>${product.price}</p>
        <div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none">
            VER MÁS
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none">
            COMPRAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
