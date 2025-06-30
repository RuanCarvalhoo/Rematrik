import React from 'react';

const Step1 = ({
  formData,
  setFormData,
  courses, // Recebe a lista de cursos
  yearOptions,
  handleSendCode,
  handleProceed,
  isSendingCode,
  isVerifying, // Novo estado para o botão "Continuar"
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
        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
      />
      
      <div className="input-group">
        {/* Agora usa o ID do curso */}
        <select
          name="courseId"
          value={formData.courseId}
          onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
          className="course-select"
        >
          <option value="">Curso</option>
          {/* Mapeia os cursos vindos da API */}
          {courses.map(course => (
            <option key={course.id} value={course.id}>{course.codigoCurso}</option>
          ))}
        </select>
        
        <input
          type="text"
          placeholder="Nº da Matrícula"
          name="matricula"
          value={formData.matricula}
          onChange={(e) => setFormData({ ...formData, matricula: e.target.value })}
        />

        <select
          name="ano"
          value={formData.ano}
          onChange={(e) => setFormData({ ...formData, ano: e.target.value })}
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
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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