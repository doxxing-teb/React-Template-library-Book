import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function Pay() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvc, setCvc] = useState('');
  
  const nameInput = useRef(null);
  const numberInput = useRef(null);
  const monthInput = useRef(null);
  const yearInput = useRef(null);
  const cvcInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos del formulario
  }

  const handleNameInput = (e) => {
    setName(e.target.value);
  }

  const handleNumberInput = (e) => {
    setNumber(e.target.value);
  }

  const handleMonthInput = (e) => {
    setMonth(e.target.value);
  }

  const handleYearInput = (e) => {
    setYear(e.target.value);
  }

  const handleCvcInput = (e) => {
    setCvc(e.target.value);
  }

  const handleContinue = () => {
    // Lógica para avanzar a la siguiente página
  }

  return (
    <form onSubmit={handleSubmit} to='../Pay/Pay.js'>
      <label>
        Nombre:
        <input type="text" value={name} onChange={handleNameInput} ref={nameInput} />
      </label>
      <label>
        Número de tarjeta:
        <input type="text" value={number} onChange={handleNumberInput} ref={numberInput} />
      </label>
      <label>
        Mes de expiración:
        <input type="text" value={month} onChange={handleMonthInput} ref={monthInput} />
      </label>
      <label>
        Año de expiración:
        <input type="text" value={year} onChange={handleYearInput} ref={yearInput} />
      </label>
      <label>
        CVC:
        <input type="text" value={cvc} onChange={handleCvcInput} ref={cvcInput} />
      </label>
      <button type="submit">Pagar</button>
      <button type="button" onClick={handleContinue}>Continuar</button>
    </form>
  );
}

export default Pay;