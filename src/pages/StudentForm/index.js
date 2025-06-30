import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import axios from 'axios'; // Importe o axios

// Remova o objeto COURSES, pois vamos buscar os dados da API
// const COURSES = { ... };

function StudentForm() {
  const [step, setStep] = useState(1);
  const [courses, setCourses] = useState([]); // Estado para armazenar os cursos da API
  const [disciplines, setDisciplines] = useState([]); // Estado para as disciplinas
  const [formData, setFormData] = useState({
    courseId: '', // Vamos usar o ID do curso
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
  const [isVerifying, setIsVerifying] = useState(false); // Estado para o botão de continuar
  const [error, setError] = useState('');

  // Efeito para buscar os cursos da API quando o componente carregar
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/cursos');
        setCourses(response.data);
      } catch (err) {
        setError('Não foi possível carregar os cursos. Tente novamente mais tarde.');
        console.error("Erro ao buscar cursos:", err);
      }
    };
    fetchCourses();
  }, []);

  // Efeito para definir as opções de ano/semestre baseado no curso selecionado
  useEffect(() => {
    if (!formData.courseId) {
      setYearOptions([]);
      return;
    }
    const selectedCourse = courses.find(c => c.id.toString() === formData.courseId);
    if (selectedCourse) {
      // Assumindo que o nome do curso indica o tipo (ex: "INTEGRADO" vs "SUBSEQUENTE")
      if (selectedCourse.nomeCurso.includes('INTEGRADO')) {
        setYearOptions([
          { value: '1', label: '1º Ano' },
          { value: '2', label: '2º Ano' },
          { value: '3', label: '3º Ano' },
        ]);
      } else {
        setYearOptions([
          { value: '1', label: '1º Semestre' },
          { value: '2', label: '2º Semestre' },
          { value: '3', label: '3º Semestre' },
          { value: '4', label: '4º Semestre' },
        ]);
      }
    }
    setFormData(prev => ({ ...prev, ano: '' }));
  }, [formData.courseId, courses]);

  // Função para enviar o código de verificação
  const handleSendCode = async () => {
    setError('');
    if (!formData.email.trim() || !formData.email.endsWith('@discente.ifpe.edu.br')) {
      setError('Por favor, informe um e-mail válido do domínio @discente.ifpe.edu.br.');
      return;
    }
    
    setIsSendingCode(true);
    try {
      await axios.post('http://localhost:8080/api/send-verification-code', { email: formData.email });
      alert('Código enviado para o seu e-mail!');
    } catch (err) {
      setError(err.response?.data || 'Erro ao enviar o código.');
    } finally {
      setIsSendingCode(false);
    }
  };

  // Função para verificar o código e buscar as disciplinas
  const handleProceed = async () => {
    setError('');
    if (Object.values(formData).some(val => val === '' && typeof val === 'string') || !verificationCode) {
        setError('Todos os campos, incluindo o código, são obrigatórios.');
        return;
    }

    setIsVerifying(true);
    try {
      // 1. Verifica o código
      await axios.post('http://localhost:8080/api/verify-code', {
        email: formData.email,
        code: verificationCode
      });
      
      // 2. Se o código for válido, busca as disciplinas
      const response = await axios.get('http://localhost:8080/api/disciplinas', {
        params: {
          cursoId: formData.courseId,
          periodo: formData.ano
        }
      });
      setDisciplines(response.data);
      setStep(2); // Avança para a próxima etapa

    } catch (err) {
      setError(err.response?.data || 'Código de verificação inválido ou erro ao buscar disciplinas.');
    } finally {
      setIsVerifying(false);
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
    // A formatação do CPF continua igual
    const onlyNumbers = e.target.value.replace(/\D/g, '').slice(0, 11);
    let formattedCpf = onlyNumbers;
    if (onlyNumbers.length > 9) formattedCpf = `${onlyNumbers.slice(0, 3)}.${onlyNumbers.slice(3, 6)}.${onlyNumbers.slice(6, 9)}-${onlyNumbers.slice(9)}`;
    else if (onlyNumbers.length > 6) formattedCpf = `${onlyNumbers.slice(0, 3)}.${onlyNumbers.slice(3, 6)}.${onlyNumbers.slice(6)}`;
    else if (onlyNumbers.length > 3) formattedCpf = `${onlyNumbers.slice(0, 3)}.${onlyNumbers.slice(3)}`;
    setFormData(prevData => ({ ...prevData, cpf: formattedCpf }));
  };

  // Função para enviar o formulário completo
  const submitForm = async () => {
    if (formData.disciplinas.length === 0) {
        setError('Você deve selecionar pelo menos uma disciplina.');
        return;
    }

    const payload = {
        aluno: {
            nome: formData.nome,
            matricula: formData.matricula,
            anoSemestre: formData.ano,
            email: formData.email,
            cpf: formData.cpf.replace(/\D/g, '')
        },
        disciplinaIds: formData.disciplinas
    };

    try {
        await axios.post('http://localhost:8080/api/rematricula', payload);
        alert('Rematrícula enviada com sucesso!');
        // Idealmente, redirecionar para uma página de sucesso
        // navigate('/rematricula/sucesso'); 
    } catch(err) {
        alert('Ocorreu um erro ao enviar sua rematrícula.');
        console.error("Erro ao submeter rematrícula:", err);
    }
  };

  return (
    <Layout showBackButton backTo="/">
      {step === 1 && (
        <Step1
          formData={formData}
          setFormData={setFormData}
          courses={courses} // Passa a lista de cursos da API
          yearOptions={yearOptions}
          handleSendCode={handleSendCode}
          handleProceed={handleProceed}
          isSendingCode={isSendingCode}
          isVerifying={isVerifying}
          verificationCode={verificationCode}
          setVerificationCode={setVerificationCode}
          error={error}
          handleCpfChange={handleCpfChange}
        />
      )}
      {step === 2 && (
        <Step2
          formData={formData}
          disciplines={disciplines} // Passa as disciplinas da API
          submitForm={submitForm}
          handleDisciplineChange={handleDisciplineChange}
          error={error}
        />
      )}
    </Layout>
  );
}

export default StudentForm;