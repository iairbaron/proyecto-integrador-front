import Form from '../components/components/Form'

const AddProduct = () => {
    return (
        <div className="flex justify-center items-center flex-col  mx-auto gap-10 pt-10 pb-20">
            <h1 className="font-bold text-4xl text-center">Agregar producto</h1>
            <Form />
        </div>
    )
}

export default AddProduct