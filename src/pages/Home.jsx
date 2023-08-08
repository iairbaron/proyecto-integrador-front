import Card from "../components/components/Card";
import React, { useState, useEffect } from "react";

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
      },
      {
        id: 2,
        name: "Producto 2",
        description: "Descripción del Producto 2",
        price: 29.99,
      },
      {
        id: 3,
        name: "Producto 3",
        description: "Descripción del Producto 3",
        price: 19.99,
      },
      {
        id: 4,
        name: "Producto 4",
        description: "Descripción del Producto 4",
        price: 19.99,
      },
      {
        id: 5,
        name: "Producto 5",
        description: "Descripción del Producto 5",
        price: 19.99,
      },
    ];

    setProducts(exampleProducts);
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Destinos</h1>
   
      <div className="flex flex-wrap gap-8">
        {products.map(product => (
          <Card key={product.id} product={product} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2" />
        ))}
      </div>
    </>
  )
  
};

export default Home;
