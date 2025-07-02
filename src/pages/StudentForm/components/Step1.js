import React from 'react';

const Step1 = ({
  formData,
  handleChange, // Recebe a nova função
  courses, 
  yearOptions,
  handleSendCode,
  handleProceed,
  isSendingCode,
  isVerifying, 
  verificationCode,
  setVerificationCode,
  error,
  handleCpfChange
}) => {
  return (
    <div className="form-wrapper">
      <h1>FORMULÁRIO<p>DE REMATRÍCULA</p></h1>
      <input
        type="text"
        placeholder="Nome completo"
        name="nome"
        value={formData.nome}
        onChange={handleChange} // Usa a nova função
        maxLength="60"
      />
      
      <div className="input-group">
    
        <select
          name="courseId"
          value={formData.courseId}
          onChange={handleChange} // Usa a nova função
          className="course-select"
        >
          <option value="">Curso</option>
        
          {courses.map(course => (
            <option key={course.id} value={course.id}>{course.nomeCurso}</option>
          ))}
        </select>
        
        <input
          type="text"
          placeholder="Matrícula"
          name="matricula"
          value={formData.matricula}
          onChange={handleChange} // Usa a nova função
          maxLength="20"
        />

        <select
          name="ano"
          value={formData.ano}
          onChange={handleChange} // Usa a nova função
          className="year-select"
          disabled={!formData.courseId}
        >
          <option value="">Período</option>
          {yearOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>

      <input
        type="email"
        placeholder="E-mail"
        name="email"
        value={formData.email}
        onChange={handleChange} // Usa a nova função
      />
      <input
        type="text"
        placeholder="CPF"
        name="cpf"
        value={formData.cpf}
        onChange={handleCpfChange}
        maxLength="14"
      />
      
      <button className="submit-button" onClick={handleSendCode} disabled={isSendingCode}>
        {isSendingCode ? 'ENVIANDO...' : 'ENVIAR CÓDIGO'}
      </button>
      <input
        type="text"
        placeholder="CÓDIGO DE VERIFICAÇÃO"
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
      />
      {error && <p className="error-message">{error}</p>}
      <button className="submit-button" onClick={handleProceed} disabled={isVerifying}>
        {isVerifying ? 'VERIFICANDO...' : 'CONTINUAR'}
      </button>
    </div>
  );
};

export default Step1;