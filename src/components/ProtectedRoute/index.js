import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Layout from '../Layout';

function ProtectedRoute({ children, backTo = "/" }) {
  const navigate = useNavigate();
  const isAdminAuthenticated = Cookies.get('adminAuth');

  const handleLogout = () => {
    // 1. Remove o cookie de autenticação
    Cookies.remove('adminAuth');
    // 2. Navega para a página inicial
    navigate('/');
  };

  if (!isAdminAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // 3. Passamos a função de logout para o Layout
  return <Layout showBackButton onLogout={handleLogout}>{children}</Layout>;
}

export default ProtectedRoute;