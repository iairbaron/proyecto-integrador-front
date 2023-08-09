import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookingBar = ({ onSearch }) => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const handleSearch = () => {
    onSearch({
      destination,
      startDate,
      endDate,
      numberOfPeople
    });
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-lg max-w-600 mx-auto">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <div className="relative">
          <select
            className="p-3 border rounded-lg w-full appearance-none focus:outline-none bg-gray-50 max-w-100"
            value={destination}
            onChange={e => setDestination(e.target.value)}
          >
            <option value="">Seleccionar destino</option>
            <option value="destino1">Destino 1</option>
            <option value="destino2">Destino 2</option>
          </select>
        </div>
        <DatePicker
          className="p-3 border rounded-lg w-full appearance-none focus:outline-none bg-gray-50"
          selected={startDate}
          onChange={date => setStartDate(date)}
          placeholderText="Fecha de inicio"
        />
        <DatePicker
          className="p-3 border rounded-lg w-full appearance-none focus:outline-none bg-gray-50"
          selected={endDate}
          onChange={date => setEndDate(date)}
          placeholderText="Fecha de fin"
        />
        <div className="relative">
          <select
            className="p-3 border rounded-lg w-full appearance-none focus:outline-none bg-gray-50 max-w-100"
            value={numberOfPeople}
            onChange={e => setNumberOfPeople(e.target.value)}
          >
            <option value={1}>1 persona</option>
            <option value={2}>2 personas</option>
            <option value={3}>3 personas</option>
          </select>
        </div>
        <button
          className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          onClick={handleSearch}
        >
          Reservar
        </button>
      </div>
    </div>
  );
};

export default BookingBar;
