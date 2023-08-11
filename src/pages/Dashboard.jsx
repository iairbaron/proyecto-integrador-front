import BasicModal from '../components/commmons/Modal';
import BasicTable from '../components/components/BasicTable'
import Form from '../components/components/Form';

const Dashboard = () => {
  const exampleProducts = [
    {
      id: 1,
      name: "Producto 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi amet tempore commodi! Exercitationem odit molestias repellat, quod praesentium, aliquid cumque minus iure deserunt incidunt quia quae veritatis, voluptatibus quaerat sequi?",
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

  return (
    <>
    <div className='p-40 w-full flex display justify-center  '>
    <div className='w-3/4'>
    <div className='flex justify-between items-center'>
    <h1 className="text-2xl font-bold mb-5">Panel de administracion </h1>
     <BasicModal textButton={"Agregar producto"} >
      <div className='flex justify-center'> 
      <div>
      <h1 className="text-2xl font-bold mb-5 text-center">Agregar producto </h1>
      <Form/>
      </div>
      </div>
    </BasicModal >
    </div>
    <BasicTable exampleProducts={exampleProducts}  />
    </div>
    </div>
    </>
  )
}

export default Dashboard