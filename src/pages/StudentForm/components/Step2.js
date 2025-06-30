import React from 'react';

// Recebe as disciplinas da API
const Step2 = ({ formData, disciplines, submitForm, handleDisciplineChange, error }) => {

  // Remova o useState e useEffect que buscava dados mockados

  return (
    <div className="form-wrapper">
      <h1>FORMULÁRIO<p>DE REMATRÍCULA</p></h1>
      <h2 className="year-subtitle">{new Date().getFullYear()}</h2>
      <div className="disciplinas-list">
        {disciplines.map((disciplina) => (
          // Usa os dados da API (id, nomeComponente)
          <label key={disciplina.id} htmlFor={disciplina.id} className="disciplina-item">
            <span>{disciplina.nomeComponente}</span>
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
      {error && <p className="error-message">{error}</p>}
      <button className="submit-button" onClick={submitForm}>Enviar pedido de rematrícula</button>
    </div>
  );
};

export default Step2;