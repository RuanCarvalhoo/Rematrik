import React, { useState } from 'react'; // Importar o useState

// Recebe as disciplinas da API
const Step2 = ({ formData, disciplines, submitForm, handleDisciplineChange, error }) => {

  // Novo estado para o termo de pesquisa
  const [searchTerm, setSearchTerm] = useState('');

  // Filtra as disciplinas com base no termo de pesquisa
  const filteredDisciplines = disciplines.filter(disciplina =>
    disciplina.nomeComponente.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="form-wrapper">
      <h1>FORMULÁRIO<p>DE REMATRÍCULA</p></h1>
      <h2 className="year-subtitle">{new Date().getFullYear()}</h2>

      {/* Barra de pesquisa adicionada */}
      <input
        type="search"
        className="search-bar"
        placeholder="Pesquisar por disciplina..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="disciplinas-list">
        {/* Mapeia a lista de disciplinas filtradas */}
        {filteredDisciplines.map((disciplina) => (
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