import React from 'react';
import { Navigate, useNavigate, useLocation } from 'react-router-dom'; // 1. Importe useLocation
import Cookies from 'js-cookie';
import Layout from '../Layout';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const location = useLocation(); // 2. Pega as informações da URL atual
  const isAdminAuthenticated = Cookies.get('adminAuth');

  const handleLogout = () => {
    Cookies.remove('adminAuth');
    navigate('/');
  };

  if (!isAdminAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // 3. Lógica condicional para o botão "Voltar"
  const isDashboard = location.pathname === '/admin/dashboard';

  // Se estiver na dashboard, o botão "voltar" será um Logout.
  // Se estiver em outra página de admin, ele será um link para a dashboard.
  return (
    <Layout 
      showBackButton 
      onLogout={isDashboard ? handleLogout : null} // Passa a função de logout SÓ na dashboard
      backTo={!isDashboard ? "/admin/dashboard" : null} // Passa o link de "voltar" SÓ nas outras páginas
    >
      {children}
    </Layout>
  );
}

export default ProtectedRoute;