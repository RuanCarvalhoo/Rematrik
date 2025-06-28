import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoIF from '../../assets/images/Logo.png';
import imagemLateral from '../../assets/images/Imagem1.png';
import sairIcon from '../../assets/images/Sair-Icon.svg';
import '../../assets/styles/StudentForm.css';

// ====================================================================
// ETAPA 1: COLETA DE DADOS E VERIFICAÇÃO DE CÓDIGO
// ====================================================================
const Step1 = ({
  formData,
  setFormData,
  handleSendCode,
  handleProceed,
  isSendingCode,
  verificationCode,
  setVerificationCode,
  error,
  handleCpfChange
}) => {
  return (
    <>
      <div className="form-wrapper">
      <h1>FORMULÁRIO<p>DE REMATRÍCULA</p></h1>
      <input
        type="text"
        placeholder="Nome completo"
        value={formData.nome}
        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
      />
      <div className="input-group">
        <input
          type="text"
          placeholder="Matrícula"
          value={formData.matricula}
          onChange={(e) => setFormData({ ...formData, matricula: e.target.value })}
        />
        <select
          value={formData.ano}
          onChange={(e) => setFormData({ ...formData, ano: e.target.value })}
        >
          <option value="">Ano</option>
          <option value="1">1º Ano</option>
          <option value="2">2º Ano</option>
          <option value="3">3º Ano</option>
        </select>
      </div>
      <input
        type="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="CPF"
        value={formData.cpf}
        onChange={handleCpfChange}
        maxLength="14"
      />

      {/* Botão renomeado para "Enviar Código" */}
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

      {/* Botão renomeado para "Continuar" */}
      <button className="submit-button" onClick={handleProceed}>
        CONTINUAR
      </button>
      </div>
    </>
  );
};

// ====================================================================
// ETAPA 2: SELEÇÃO DE DISCIPLINAS
// ====================================================================
const Step2 = ({ formData, submitForm, handleDisciplineChange }) => {
  const [disciplines, setDisciplines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDisciplines = async () => {
      
      setTimeout(() => {
        const mockDisciplinesFromDB = [
          { id: 'prog1', name: 'INTRODUÇÃO A PROGRAMAÇÃO' },
          { id: 'etica1', name: 'ÉTICA' },
          { id: 'com1', name: 'COMUNICAÇÃO E EXPRESSÃO' },
          { id: 'ing1', name: 'INGLÊS 1' },
        ];
        setDisciplines(mockDisciplinesFromDB);
        setIsLoading(false);
      }, 1500);
    };

    fetchDisciplines();
  }, [formData.ano, formData.matricula]);

  if (isLoading) {
    return <h2>Carregando disciplinas...</h2>;
  }

  return (
    <>
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
      <button className="submit-button" onClick={submitForm}>CONTINUAR</button>
      </div>
    </>
  );
};


// ====================================================================
// COMPONENTE PRINCIPAL: GERENCIADOR DO FORMULÁRIO
// ====================================================================
function StudentForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: '',
    matricula: '',
    ano: '',
    email: '',
    cpf: '',
    disciplinas: [],
  });

  const [verificationCode, setVerificationCode] = useState('');
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [error, setError] = useState('');

  // --- LÓGICA ATUALIZADA ---
  // Esta função agora APENAS envia o código.
  const handleSendCode = async () => {
    setError('');
    // A única verificação aqui é se o campo de e-mail está preenchido, para saber para onde enviar.
    if (!formData.email.trim()) {
      setError('Por favor, informe o e-mail para receber o código.');
      return;
    }
    
    setIsSendingCode(true);
    setTimeout(() => {
      setIsSendingCode(false);
    }, 2000);
  };

  // --- LÓGICA ATUALIZADA ---
  // Esta função agora faz TODA a validação antes de prosseguir.
  const handleProceed = async () => {
    setError('');

    // 1. Validação de campos em branco
    if (!formData.nome.trim()) { setError('O campo "Nome completo" é obrigatório.'); return; }
    if (!formData.matricula.trim()) { setError('O campo "Matrícula" é obrigatório.'); return; }
    if (!formData.ano) { setError('Por favor, selecione o ano.'); return; }
    if (!formData.email.trim()) { setError('O campo "E-mail" é obrigatório.'); return; }
    if (!formData.cpf.trim()) { setError('O campo "CPF" é obrigatório.'); return; }

    // 2. Validação de domínio do e-mail
    const dominioObrigatorio = '@discente.ifpe.edu.br';
    if (!formData.email.endsWith(dominioObrigatorio)) {
      setError(`O e-mail deve ser do domínio ${dominioObrigatorio}`);
      return; 
    }

    // 3. Validação do código de verificação
    if (!verificationCode.trim()) {
      setError('Por favor, insira o código de verificação.');
      return;
    }
    
    // 4. Lógica final de verificação do código
    if (verificationCode === '123456') { // Simulação
      setStep(2);
    } else {
      setError('Código de verificação inválido. Tente novamente.');
    }
  };

  // Funções que não precisaram de alteração na lógica
  const handleDisciplineChange = (disciplineId) => { setFormData(prev => ({...prev, disciplinas: prev.disciplinas.includes(disciplineId) ? prev.disciplinas.filter(id => id !== disciplineId) : [...prev.disciplinas, disciplineId]})) };
  const submitForm = () => { const cpfApenasNumeros = formData.cpf.replace(/\D/g, ''); const dadosParaBackend = {...formData, cpf: cpfApenasNumeros}; alert('Rematrícula enviada com sucesso!'); };
  const handleCpfChange = (e) => { const onlyNumbers = e.target.value.replace(/\D/g, ''); const truncatedNumbers = onlyNumbers.slice(0, 11); let formattedCpf = truncatedNumbers; if (truncatedNumbers.length > 9) { formattedCpf = `${truncatedNumbers.slice(0, 3)}.${truncatedNumbers.slice(3, 6)}.${truncatedNumbers.slice(6, 9)}-${truncatedNumbers.slice(9, 11)}`; } else if (truncatedNumbers.length > 6) { formattedCpf = `${truncatedNumbers.slice(0, 3)}.${truncatedNumbers.slice(3, 6)}.${truncatedNumbers.slice(6, 9)}`; } else if (truncatedNumbers.length > 3) { formattedCpf = `${truncatedNumbers.slice(0, 3)}.${truncatedNumbers.slice(3, 6)}`; } setFormData({ ...formData, cpf: formattedCpf }); };
  // console.log(dadosParaBackend);

  return (
    <div className="container">
      <Link to="/" className="back-button"><img src={sairIcon} alt="Voltar" width="40px" /></Link>
      <div className="logo"><img src={logoIF} alt="Logo do IF" width="50px" /></div>
      <div className="paineis">
        <div className="formulario-rematricula">
          {step === 1 && (
            <Step1
              formData={formData}
              setFormData={setFormData}
              handleSendCode={handleSendCode}
              handleProceed={handleProceed}
              isSendingCode={isSendingCode}
              verificationCode={verificationCode}
              setVerificationCode={setVerificationCode}
              error={error}
              handleCpfChange={handleCpfChange}
            />
          )}
          {step === 2 && (
            <Step2
              formData={formData}
              submitForm={submitForm}
              handleDisciplineChange={handleDisciplineChange}
            />
          )}
        </div>
        <div className="imagem">
          <img src={imagemLateral} alt="Estudantes do IFPE" width="900px" height="600px" />
        </div>
      </div>
    </div>
  );
}

export default StudentForm;