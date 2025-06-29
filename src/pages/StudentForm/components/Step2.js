import React, { useState, useEffect } from 'react';

const Step2 = ({ formData, submitForm, handleDisciplineChange }) => {
  const [disciplines, setDisciplines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulação de busca de disciplinas
    setTimeout(() => {
      const mockDisciplines = [
        { id: 'prog1', name: 'INTRODUÇÃO A PROGRAMAÇÃO' },
        { id: 'etica1', name: 'ÉTICA' },
        { id: 'com1', name: 'COMUNICAÇÃO E EXPRESSÃO' },
        { id: 'ing1', name: 'INGLÊS 1' },
      ];
      setDisciplines(mockDisciplines);
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <h2>Carregando disciplinas...</h2>;
  }

  return (
    <div className="form-wrapper">
      <h1>FORMULÁRIO<p>DE REMATRÍCULA</p></h1>
      <h2 className="year-subtitle">{new Date().getFullYear()}</h2>
      <div className="disciplinas-list">
        {disciplines.map((disciplina) => (
          <label key={disciplina.id} htmlFor={disciplina.id} className="disciplina-item">
            <span>{disciplina.name}</span>
            <input
              type="checkbox"
              id={disciplina.id}
              checked={formData.disciplinas.includes(disciplina.id)}
              onChange={() => handleDisciplineChange(disciplina.id)}
            />
            <span className="custom-checkbox"></span>
          </label>
        ))}
      </div>
      <button className="submit-button" onClick={submitForm}>Enviar pedido de rematrícula</button>
    </div>
  );
};

// A linha mais importante - exporta o componente como padrão
export default Step2;