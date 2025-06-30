import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import Cookies from 'js-cookie';
import axios from 'axios'; // 1. Importe o axios

function AdminLogin() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get('adminAuth')) {
      navigate('/admin/dashboard');
    }
  }, [navigate]);

  const handleLogin = async (e) => { // 2. Transforme a função em async
    e.preventDefault();
    setError('');

    try {
      // 3. Crie o cabeçalho de autenticação Basic
      const authToken = btoa(`${usuario}:${senha}`); // Codifica "usuario:senha" em Base64
      
      // 4. Faça a chamada para um endpoint protegido no backend
      // Usaremos um endpoint que já existe para verificar se o login funciona.
      await axios.get('http://localhost:8080/api/admin/requisicoes?status=pendente', {
        headers: {
          'Authorization': `Basic ${authToken}`
        }
      });

      // 5. Se a chamada funcionar (não der erro), o login é válido
      const umaHora = 1 / 24;
      // Armazene o token de autenticação, não apenas 'true'
      Cookies.set('adminAuth', authToken, { expires: umaHora }); 
      navigate('/admin/dashboard');

    } catch (err) {
      // 6. Se der erro (401 Unauthorized), as credenciais estão erradas
      setError('Usuário ou senha inválidos.');
      console.error('Erro de autenticação:', err);
    }
  };

  return (
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