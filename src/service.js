// src/Service.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Service = () => {
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdvice = async () => {
      try {
        const response = await axios.get('https://api.adviceslip.com/advice');
        setAdvice(response.data.slip.advice);
        setLoading(false);
      } catch (err) {
        setError('Não foi possível buscar o conselho.');
        setLoading(false);
      }
    };

    fetchAdvice();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div>
      <h1>Conselho do Dia</h1>
      <p>{advice}</p>
    </div>
  );
};

export default Service;
