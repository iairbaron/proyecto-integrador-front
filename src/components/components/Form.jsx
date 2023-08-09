import React, { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';



const ariaLabel = { 'aria-label': 'description' };

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
    const [url, seturl] = useState('');
    const [msj, setmsj] = useState('');
    const [cantUrl, setCantUrl] = useState('');

    



    function handleSubmit(e) {
        e.preventDefault()

        const producto = {
            Pnombre: nombre.trim(),
            Pdescripcion: descripcion,
            Purl: url
        }

    }
    return (
        <ThemeProvider theme={theme}>
            <div>
                <form action="" onSubmit={handleSubmit} className='flex flex-col gap-6 w-80'>
                    <TextField
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        onChange={(e) => setNombre(e.target.value)}
                    />

                    <TextField
                        label="Descripcion"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                        onChange={(e) => setDescripcion(e.target.value)}
                    />

                    <select
                        className='border rounded px-2 py-1'
                        onChange={(e) => setCantUrl(e.target.value)}
                    >
                        <option value=''>Selecciona una opción</option>
                        <option value={1}> 1</option>
                        <option value={2}> 2</option>
                        <option value={3}> 3</option>
                        <option value={4}> 4</option>
                        
                    </select>

                                        
                    {/* <Input defaultValue="Hello world" inputProps={ariaLabel} /> */}

                    

                    

                    <p className=' text-[red]'>{msj}</p>

                    <button className='btn h-10 bg-gradient-to-r from-[#9EDE82] to-[#9EDE80] text-white font-semibold px-3 py-1 rounded duration-500 md:static' type='submit'>Enviar</button>
                    {url && <div className='text-center'>{url}</div>}

                </form>

            </div>
        </ThemeProvider>
    )
}

export default Form