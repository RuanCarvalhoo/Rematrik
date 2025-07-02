import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importa os componentes
import ProtectedRoute from './components/ProtectedRoute';
import ProfileSelection from './pages/ProfileSelection';
import StudentForm from './pages/StudentForm';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import PendingRequests from './pages/PendingRequests'; // Importado
import AnalysisRequests from './pages/AnalysisRequests'; // Importado
import CompletedRequests from './pages/CompletedRequests'; // Importado
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
      
        <Route path="/admin/requisicoes-pendentes" element={<ProtectedRoute><PendingRequests /></ProtectedRoute>} />
        <Route path="/admin/requisicoes-analise" element={<ProtectedRoute><AnalysisRequests /></ProtectedRoute>} />
        <Route path="/admin/requisicoes-concluidas" element={<ProtectedRoute><CompletedRequests /></ProtectedRoute>} />
        <Route path="/admin/requisicao/:requestId" element={<ProtectedRoute><RequestDetailPage /></ProtectedRoute>} />
        
      </Routes>
    </Router>
  );
}

export default App;