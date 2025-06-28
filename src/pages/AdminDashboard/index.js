import React from 'react';
import { Link } from 'react-router-dom';

// Reutilizamos os mesmos assets e estilos para manter a consistência
import logoIF from '../../assets/images/Logo.png';
import sairIcon from '../../assets/images/Sair-Icon.svg';
import '../../assets/styles/StudentForm.css';

function AdminDashboard() {
  return (
    <div className="container">
      {/* O botão de voltar pode ser usado como um "Sair" que leva de volta à tela inicial */}
      <Link to="/" className="back-button"><img src={sairIcon} alt="Sair" width="40px" /></Link>
      <div className="logo"><img src={logoIF} alt="Logo do IF" width="50px" /></div>
      <div className="paineis">
        {/* Reutilizamos as classes de layout que já funcionam */}
        <div className="formulario-rematricula admin-login-form">
          <h1>DASHBOARD<p>ADMIN</p></h1>
          
          <div className="dashboard-buttons">
            {/* Usamos <Link> em vez de <button> pois eles irão navegar para outras páginas */}
            <Link to="/admin/requisicoes-pendentes" className="dashboard-button">
              REQUISIÇÕES PENDENTES
            </Link>
            <Link to="/admin/requisicoes-analise" className="dashboard-button">
              REQUISIÇÕES PARA ANÁLISE
            </Link>
            <Link to="/admin/requisicoes-concluidas" className="dashboard-button">
              REQUISIÇÕES CONCLUÍDAS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;