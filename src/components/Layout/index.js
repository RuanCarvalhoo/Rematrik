import React from 'react';
import { Link } from 'react-router-dom';
import logoIF from '../../assets/images/Logo.png';
import imagemLateral from '../../assets/images/Imagem1.png';
import sairIcon from '../../assets/images/Sair-Icon.svg';
import './Layout.css';

// 1. AQUI ESTÁ A CORREÇÃO: Adicionamos 'onLogout' à lista de props
function Layout({ children, showBackButton = false, backTo = "/", onLogout }) {

  // 2. O resto do código agora funciona, pois 'onLogout' foi definido.
  const backButtonAction = showBackButton ? (
    onLogout ? (
      <a href="#" onClick={onLogout} className="back-button" title="Sair">
        <img src={sairIcon} alt="Sair" width="40px" />
      </a>
    ) : (
      <Link to={backTo} className="back-button" title="Voltar">
        <img src={sairIcon} alt="Voltar" width="40px" />
      </Link>
    )
  ) : null;

  return (
    <div className="layout-container">
      {backButtonAction}
      <div className="logo">
        <img src={logoIF} alt="Logo do IF" width="50px" />
      </div>
      <div className="paineis">
        <div className="content-panel">
          {children}
        </div>
        <div className="image-panel">
          <img src={imagemLateral} alt="Estudantes do IFPE" />
        </div>
      </div>
    </div>
  );
}

export default Layout;