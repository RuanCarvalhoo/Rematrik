import React from 'react';
import { Link } from 'react-router-dom'; // Importa o Link para navegação
import logoIF from '../../assets/images/Logo.png';
import imagemLateral from '../../assets/images/Imagem1.png';
import styles from '../../assets/styles/ProfileSelection.css';

function ProfileSelection() {
  return (
    <div className="container">
      <div className="logo">
        <img src={logoIF} alt="Logo do IF" width="50px" />
      </div>
      <div className="paineis">
        <div className="formulario">
          <h1>REMATRIK</h1>
          <h2>Selecione o seu perfil para proseguir</h2>
          <div className="botoes">
            {/* O Link do React Router funciona como a tag <a>, mas sem recarregar a página */}
            <Link to="/rematricula/aluno">
              <button className="aluno">ALUNO</button>
            </Link>
            <Link to="/admin">
              <button className="admin">ADMIN</button>
            </Link>
          </div>
        </div>
        <div className="imagem">
          <img src={imagemLateral} alt="Estudantes do IFPE" width="900px" height="600px"  />
        </div>
      </div>
    </div>
  );
}

export default ProfileSelection;