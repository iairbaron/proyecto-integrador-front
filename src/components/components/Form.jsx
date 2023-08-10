import  { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const theme = createTheme({
    palette: {
        primary: {
            main: '#9EDE82',
        },
    },
});

const Form = () => {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [urls, setUrls] = useState([]);
    const [msj, setMsj] = useState('');
    const [cantUrl, setCantUrl] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const producto = {
            Pnombre: nombre.trim(),
            Pdescripcion: descripcion,
            Purls: urls
        };

        // Realizar la solicitud POST utilizando Axios
        axios.post('URL_DE_TU_API', producto)
            .then(response => {
                console.log('Producto enviado:', response.data);
                // Limpiar el formulario
                setNombre('');
                setDescripcion('');
                setUrls([]);
                setCantUrl('');
                setMsj('Producto enviado exitosamente');
            })
            .catch(error => {
                console.error('Error al enviar el producto:', error);
                setMsj('Hubo un error al enviar el producto.');
            });
    }

    function handleUrlChange(index, value) {
        const newUrls = [...urls];
        newUrls[index] = value;
        setUrls(newUrls);
    }

    function renderUrlInputs() {
        return Array.from({ length: Number(cantUrl) }, (_, index) => (
            <TextField
                key={index}
                label={`URL ${index + 1}`}
                variant="outlined"
                fullWidth
                size="small"
                value={urls[index] || ''}
                onChange={(e) => handleUrlChange(index, e.target.value)}
                style={{ marginBottom: '2px' }} // Agrega un estilo para reducir la altura

            />
        ));
    }
    return (
        <ThemeProvider theme={theme}>
            <div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-6 w-80'>
                    <TextField
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />

                    <TextField
                        label="Descripcion"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />

                    <select
                        className='border rounded px-2 py-1'
                        value={cantUrl}
                        onChange={(e) => setCantUrl(e.target.value)}
                    >
                        <option value=''>Selecciona cantidad de urls</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>

                    {renderUrlInputs()}

                    <p className='text-[red]'>{msj}</p>

                    <button className='btn h-10 bg-gradient-to-r from-[#9EDE82] to-[#9EDE80] text-white font-semibold px-3 py-1 rounded duration-500 md:static' type='submit'>Enviar</button>

                </form>
            </div>
        </ThemeProvider>
    );
}

export default Form;