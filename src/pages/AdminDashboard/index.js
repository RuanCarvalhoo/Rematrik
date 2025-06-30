import React from 'react';
import { Link } from 'react-router-dom';

// O Layout e os estilos agora são aplicados pelo ProtectedRoute,
// então não precisamos mais importar nada aqui.

function AdminDashboard() {
  // O componente agora retorna APENAS o conteúdo que vai dentro do painel.
  return (
    <>
      <h1>DASHBOARD<p>ADMIN</p></h1>
      
      <div className="dashboard-buttons">
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
    </>
  );
}

export default AdminDashboard;