import Card from "../components/components/Card";
import BookingBar from "../components/commmons/BookingBar";
import React, { useState, useEffect } from "react";
import mediaImage from '../assets/media.png'

const Home = () => {
  const [products, setProducts] = useState([]);

  //ESTA COMENTADO PORQUE AUN NO ESTA LISTA LA API QUE DEVUELVA PRODUCTOS ALEATORIOS

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch('URL_DE_LA_API');
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  useEffect(() => {
    // Array de ejemplo con datos de productos
    const exampleProducts = [
      {
        id: 1,
        name: "Producto 1",
        description: "Descripción del Producto 1",
        price: 19.99,
        image: mediaImage,
      },
      {
        id: 2,
        name: "Producto 2",
        description: "Descripción del Producto 2",
        price: 29.99,
        image: mediaImage,
      },
      {
        id: 3,
        name: "Producto 3",
        description: "Descripción del Producto 3",
        price: 19.99,
        image: mediaImage,
      },
      {
        id: 4,
        name: "Producto 4",
        description: "Descripción del Producto 4",
        price: 19.99,
        image: mediaImage,
      },
      {
        id: 5,
        name: "Producto 5",
        description: "Descripción del Producto 5",
        price: 19.99,
        image: mediaImage,
      },
    ];

    setProducts(exampleProducts);
  }, []);

 
  return (
    <>
      <BookingBar />
      <div className="p-20 mx-auto max-w-screen-xl">
        <h1 className="text-2xl font-bold mb-4 ">Actividades y Excursiones</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {products.map(product => (
            <div key={product.id} className="w-full p-2">
              <Card product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
