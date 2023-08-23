import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: ['user'],
        nombre: '',
        apellido: ''
    });

    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        nombre: '',
        apellido: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, email, password, nombre, apellido } = formData;
        const newErrors = {};

        if (!username) {
            newErrors.username = 'El nombre de usuario es obligatorio';
        }

        if (!email) {
            newErrors.email = 'El correo electrónico es obligatorio';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Formato de correo electrónico inválido';
        }

        if (!password) {
            newErrors.password = 'La contraseña es obligatoria';
        } else if (password.length < 8) {
            newErrors.password = 'La contraseña debe tener al menos 8 caracteres';
        }

        if (!nombre) {
            newErrors.nombre = 'El nombre es obligatorio';
        }

        if (!apellido) {
            newErrors.apellido = 'El apellido es obligatorio';
        }

        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axios.post('http://localhost:8080/api/auth/signup', formData);
                setMessage('Registro exitoso. Bienvenido/a.');
                console.log('Registro exitoso:', response.data);
            } catch (error) {
                setMessage('Error al registrar. Por favor, intenta nuevamente.');
                console.error('Error al registrar:', error);
            }
        } else {
            setErrors(newErrors);
            setMessage('');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-md w-full max-w-2xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre de Usuario:</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className={`mt-1 p-2 w-full rounded-md border focus:ring focus:ring-green-300 ${errors.username && 'border-red-500'}`}
                        />
                        <span className="text-red-500 text-sm">{errors.username}</span>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Correo Electrónico:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`mt-1 p-2 w-full rounded-md border focus:ring focus:ring-green-300 ${errors.email && 'border-red-500'}`}
                        />
                        <span className="text-red-500 text-sm">{errors.email}</span>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Contraseña:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`mt-1 p-2 w-full rounded-md border focus:ring focus:ring-green-300 ${errors.password && 'border-red-500'}`}
                        />
                        <span className="text-red-500 text-sm">{errors.password}</span>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre:</label>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className={`mt-1 p-2 w-full rounded-md border focus:ring focus:ring-green-300 ${errors.nombre && 'border-red-500'}`}
                        />
                        <span className="text-red-500 text-sm">{errors.nombre}</span>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Apellido:</label>
                        <input
                            type="text"
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                            className={`mt-1 p-2 w-full rounded-md border focus:ring focus:ring-green-300 ${errors.apellido && 'border-red-500'}`}
                        />
                        <span className="text-red-500 text-sm">{errors.apellido}</span>
                    </div>
                    <button
                        type="submit"
                        className="bg-green-400 text-white p-2 rounded-md hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 w-full"
                    >
                        Registrarse
                    </button>
                    <p className="text-center text-green-600 mt-2">{message}</p>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;