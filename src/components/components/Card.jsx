import { Link } from 'react-router-dom';

const Card = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 md:flex md:items-center md:space-x-4">
      <div className="md:mr-4">
        <img
          src={product.image}
          alt={product.name}
          className="h-[200px] md:h-auto min-h-[200px] min-w-[300px]"
        />
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p>${product.price}</p>
        <div S>
          <Link to={`/producto/${product.id}`} state={{ product }} className="link">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none">
              VER MÁS
            </button>
          </Link>
          <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none">
            Rese
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;