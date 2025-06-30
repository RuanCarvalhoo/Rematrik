import React, { useState, useEffect } from 'react'; // 1. Importe useEffect
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import Cookies from 'js-cookie';

function AdminLogin() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // 2. Adiciona o useEffect para verificar o cookie na inicialização da página
  useEffect(() => {
    if (Cookies.get('adminAuth')) {
      console.log('Admin já logado. Redirecionando para o dashboard...');
      navigate('/admin/dashboard'); // Redireciona imediatamente
    }
  }, [navigate]); // A dependência [navigate] garante que o hook não cause loops

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (usuario === 'admin' && senha === 'admin123') {
      const umaHora = 1 / 24;
      Cookies.set('adminAuth', 'true', { expires: umaHora });
      navigate('/admin/dashboard');
    } else {
      setError('Usuário ou senha inválidos.');
    }
  };

  return (
    // Adicionamos a prop showBackButton para que o botão apareça aqui também
    <Layout showBackButton>
      <form className="form-wrapper" onSubmit={handleLogin}>
        <h1>ACESSO<p>ADMINISTRATIVO</p></h1>
        <input type="text" placeholder="Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)} required />
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        <button type="submit" className="submit-button">ENTRAR</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </Layout>
  );
}

export default AdminLogin;