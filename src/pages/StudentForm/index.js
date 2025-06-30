import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Step1 from './components/Step1';
import Step2 from './components/Step2';

const COURSES = {
  'IIBJ': { name: 'TÉCNICO EM INFORMÁTICA PARA INTERNET INT', type: 'integrado' },
  'IPIBJ': { name: 'TÉCNICO EM INFORMÁTICA PARA INTERNET', type: 'subsequente' },
  'AP3-BJ': { name: 'CURSO TÉCNICO EM AGROPECUÁRIA', type: 'subsequente' },
  'APBJ': { name: 'TÉCNICO EM AGROPECUÁRIA INT', type: 'integrado' },
  'AIBJ': { name: 'TÉCNICO EM AGROINDÚSTRIA INT', type: 'integrado' },
  'AI3-BJ': { name: 'CURSO TÉCNICO EM AGROINDÚSTRIA', type: 'subsequente' }
};

function StudentForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    courseTag: '',
    matricula: '',
    ano: '',
    nome: '',
    email: '',
    cpf: '',
    disciplinas: [],
  });

  const [yearOptions, setYearOptions] = useState([]);
  const [verificationCode, setVerificationCode] = useState('');
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const selectedCourse = COURSES[formData.courseTag];
    if (selectedCourse) {
      if (selectedCourse.type === 'integrado') {
        setYearOptions([
          { value: '1_ano', label: '1º Ano' },
          { value: '2_ano', label: '2º Ano' },
          { value: '3_ano', label: '3º Ano' },
        ]);
      } else {
        setYearOptions([
          { value: '1_sem', label: '1º Semestre' },
          { value: '2_sem', label: '2º Semestre' },
          { value: '3_sem', label: '3º Semestre' },
          { value: '4_sem', label: '4º Semestre' },
        ]);
      }
    } else {
      setYearOptions([]);
    }
    setFormData(prev => ({ ...prev, ano: '' }));
  }, [formData.courseTag]);

  const handleSendCode = () => {
    setError('');
    if (!formData.email.trim()) {
      setError('Por favor, informe o e-mail para receber o código.');
      return;
    }
    
    setIsSendingCode(true);
    console.log(`Simulando envio de código para ${formData.email}...`);
    setTimeout(() => {
      setIsSendingCode(false);
    }, 2000);
  };

  const handleProceed = () => {
    setError('');

    if (!formData.courseTag || !formData.matricula.trim() || !formData.ano || !formData.nome.trim() || !formData.email.trim() || !formData.cpf.trim()) {
      setError('Todos os campos são obrigatórios.');
      return;
    }

    const dominioObrigatorio = '@discente.ifpe.edu.br';
    if (!formData.email.endsWith(dominioObrigatorio)) {
      setError(`O e-mail deve ser do domínio ${dominioObrigatorio}`);
      return; 
    }

    if (!verificationCode.trim()) {
      setError('Por favor, insira o código de verificação.');
      return;
    }
    
    if (verificationCode === '123456') {
      console.log('Código válido. Prosseguindo para a etapa 2.');
      setStep(2);
    } else {
      setError('Código de verificação inválido. Tente novamente.');
    }
  };

  const handleDisciplineChange = (disciplineId) => {
    setFormData(prevFormData => {
      const disciplinasAtuais = prevFormData.disciplinas;
      if (disciplinasAtuais.includes(disciplineId)) {
        return { ...prevFormData, disciplinas: disciplinasAtuais.filter(id => id !== disciplineId) };
      } else {
        return { ...prevFormData, disciplinas: [...disciplinasAtuais, disciplineId] };
      }
    });
  };

  const handleCpfChange = (e) => {
    const onlyNumbers = e.target.value.replace(/\D/g, '');
    const truncatedNumbers = onlyNumbers.slice(0, 11);
    let formattedCpf = truncatedNumbers;
    
    if (truncatedNumbers.length > 9) {
      formattedCpf = `${truncatedNumbers.slice(0, 3)}.${truncatedNumbers.slice(3, 6)}.${truncatedNumbers.slice(6, 9)}-${truncatedNumbers.slice(9, 11)}`;
    } else if (truncatedNumbers.length > 6) {
      formattedCpf = `${truncatedNumbers.slice(0, 3)}.${truncatedNumbers.slice(3, 6)}.${truncatedNumbers.slice(6, 9)}`;
    } else if (truncatedNumbers.length > 3) {
      formattedCpf = `${truncatedNumbers.slice(0, 3)}.${truncatedNumbers.slice(3, 6)}`;
    }
    
    setFormData(prevData => ({ ...prevData, cpf: formattedCpf }));
  };

  const submitForm = () => {
    const cpfApenasNumeros = formData.cpf.replace(/\D/g, '');
    const dadosParaBackend = { ...formData, cpf: cpfApenasNumeros };
    
    console.log("Dados enviados ao backend:", dadosParaBackend);
    alert('Rematrícula enviada com sucesso!');
  };

  return (
    <Layout showBackButton backTo="/">
      {step === 1 && (
        <Step1
          formData={formData}
          setFormData={setFormData}
          courses={COURSES}
          yearOptions={yearOptions}
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
    </Layout>
  );
}

export default StudentForm;