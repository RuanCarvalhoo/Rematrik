import React, { useState } from 'react';
// 1. Importa o Link e o useNavigate da mesma biblioteca
import { Link, useNavigate } from 'react-router-dom';

import logoIF from '../../assets/images/Logo.png';
import imagemLateral from '../../assets/images/Imagem1.png';
import sairIcon from '../../assets/images/Sair-Icon.svg';

import '../../assets/styles/StudentForm.css';

function AdminLogin() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  // 2. Inicializa o hook useNavigate para podermos redirecionar o usuário
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError(''); // Limpa erros anteriores

    // TODO: IMPLEMENTAR CHAMADA REAL AO BACKEND AQUI
    // Simulação de verificação de credenciais
    if (usuario === 'admin' && senha === 'admin123') {
      navigate('/admin/dashboard');

    } else {
      setError('Usuário ou senha inválidos.');
    }
  };

  return (
    <div className="container">
      <Link to="/" className="back-button"><img src={sairIcon} alt="Voltar" width="40px" /></Link>
      <div className="logo"><img src={logoIF} alt="Logo do IF" width="50px" /></div>
      <div className="paineis">
        <form className="formulario-rematricula admin-login-form" onSubmit={handleLogin}>
          <h1>ACESSO<p>ADMINISTRATIVO</p></h1>
          
          <div className="form-wrapper">
            <input
              type="text"
              placeholder="Usuário"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
            
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            ENTRAR
          </button>

          {/* Exibe a mensagem de erro se ela existir */}
          {error && <p className="error-message">{error}</p>}

        </form>
        <div className="imagem">
          <img src={imagemLateral} alt="Estudantes do IFPE" width="900px" height="600px" />
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;