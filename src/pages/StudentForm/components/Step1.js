import React from 'react';

// Recebendo as novas props: 'courses' e 'yearOptions'
const Step1 = ({
  formData,
  setFormData,
  courses,
  yearOptions,
  handleSendCode,
  handleProceed,
  isSendingCode,
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
        {/* Caixa de seleção para os Cursos */}
        <select
          name="courseTag"
          value={formData.courseTag}
          onChange={(e) => setFormData({ ...formData, courseTag: e.target.value })}
          className="course-select"
        >
          <option value="">Curso</option>
          {/* AQUI ESTÁ A CORREÇÃO: Verificamos se 'courses' existe antes de usá-lo */}
          {courses && Object.keys(courses).map(tag => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
        
        {/* Caixa para o número da matrícula */}
        <input
          type="text"
          placeholder="Nº da Matrícula"
          name="matricula"
          value={formData.matricula}
          onChange={(e) => setFormData({ ...formData, matricula: e.target.value })}
        />

        {/* Caixa de seleção para Ano/Semestre (agora dinâmica) */}
        <select
          name="ano"
          value={formData.ano}
          onChange={(e) => setFormData({ ...formData, ano: e.target.value })}
          className="year-select"
          disabled={!formData.courseTag} // Desabilitado até um curso ser escolhido
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
      <button className="submit-button" onClick={handleProceed}>
        CONTINUAR
      </button>
    </div>
  );
};

export default Step1;