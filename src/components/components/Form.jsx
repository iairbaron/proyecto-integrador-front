import  { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useContext } from "react";
import { ContextGlobal } from '../utils/GlobalContext';



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
    const [urls, setUrls] = useState("");
    const [msj, setMsj] = useState('');



    const { submitProduct } = useContext(ContextGlobal);
    
    async function handleSubmit(e) {
        e.preventDefault();
        const producto = {
            nombre: nombre.trim(),
            descripcion: descripcion,
            urls: urls
        };

        // Usa la función submitProduct del contexto global
        const url = 'URL DE LA API'; // Define la URL aquí

        try {
            const success = await submitProduct(url, producto);
            if (success) {
                setNombre('');
                setDescripcion('');
                setUrls([]);
                setMsj('Producto enviado exitosamente');
            } else {
                setMsj('Hubo un error al enviar el producto.');
            }
        } catch (error) {
            console.error('Error al enviar el producto:', error);
            setMsj('Hubo un error al enviar el producto.');
        }
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

                    <TextField
                        label="URL"
                        variant="outlined"
                        multiline
                        fullWidth
                        value={urls}
                        onChange={(e) => setUrls(e.target.value)}
                    />

                    <p className='text-[red]'>{msj}</p>

                    <button className='btn h-10 bg-gradient-to-r from-[#9EDE82] to-[#9EDE80] text-white font-semibold px-3 py-1 rounded duration-500 md:static' type='submit'>Enviar</button>

                </form>
            </div>
        </ThemeProvider>
    );
}

export default Form;