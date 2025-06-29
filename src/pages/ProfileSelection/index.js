import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import './ProfileSelection.css';

function ProfileSelection() {
  return (
    <Layout>
      <h1>REMATRIK</h1>
      <h2>Selecione o seu perfil para proseguir:</h2>
      
      <div className="selection-buttons">
        <Link to="/rematricula/aluno">
          <button className="selection-button">ALUNO</button>
        </Link>
        <Link to="/admin">
          <button className="selection-button">ADMIN</button>
        </Link>
      </div>
    </Layout>
  );
}

export default ProfileSelection;