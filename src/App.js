import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importa os componentes
import ProtectedRoute from './components/ProtectedRoute'; // 1. Importe o componente de proteção
import ProfileSelection from './pages/ProfileSelection';
import StudentForm from './pages/StudentForm';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import RequestListPage from './pages/RequestListPage';
import RequestDetailPage from './pages/RequestDetailPage';

import './assets/styles/global.css';
import './assets/styles/forms.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas Públicas */}
        <Route path="/" element={<ProfileSelection />} />
        <Route path="/rematricula/aluno" element={<StudentForm />} />
        <Route path="/admin" element={<AdminLogin />} />

        {/* Rotas Protegidas do Admin */}
        <Route path="/admin/dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/requisicoes-pendentes" element={<ProtectedRoute><RequestListPage title="REQUISIÇÕES PENDENTES" status="pendente" /></ProtectedRoute>} />
        <Route path="/admin/requisicoes-analise" element={<ProtectedRoute><RequestListPage title="REQUISIÇÕES PARA ANÁLISE" status="analise" /></ProtectedRoute>} />
        <Route path="/admin/requisicoes-concluidas" element={<ProtectedRoute><RequestListPage title="REQUISIÇÕES CONCLUÍDAS" status="concluida" /></ProtectedRoute>} />
        <Route path="/admin/requisicao/:requestId" element={<ProtectedRoute><RequestDetailPage /></ProtectedRoute>} />
        
      </Routes>
    </Router>
  );
}

export default App;