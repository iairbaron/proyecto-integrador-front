import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUtensils, faTv, faSnowflake, faPaw, faParking, faSwimmingPool, faWifi
} from '@fortawesome/free-solid-svg-icons';

const CaracteristicasProducto = () => {
    const caracteristicas = [
        { nombre: 'Cocina', icono: faUtensils },
        { nombre: 'Televisor', icono: faTv },
        { nombre: 'Aire acondicionado', icono: faSnowflake },
        { nombre: 'Apto Mascotas', icono: faPaw },
        { nombre: 'Estacionamiento Gratuito', icono: faParking },
        { nombre: 'Pileta', icono: faSwimmingPool },
        { nombre: 'Wifi', icono: faWifi },
    ];

    return (
        <div className="w-full py-4 px-6"> {/* Añadido padding horizontal */}
            <h3 className="text-lg font-semibold mb-2 text-green-500">Que ofrece este lugar?</h3>
            <div className="w-full h-0.5 bg-green-500 mb-4"></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
                {caracteristicas.map(caracteristica => (
                    <div
                        key={caracteristica.nombre}
                        className="flex items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg space-x-2 h-24"
                    >
                        <FontAwesomeIcon icon={caracteristica.icono} className="text-green-500 text-base" />
                        <span className="text-sm">{caracteristica.nombre}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CaracteristicasProducto;