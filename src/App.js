import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importa as páginas
import ProfileSelection from './pages/ProfileSelection';
import StudentForm from './pages/StudentForm';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard'; // 1. Importe o novo componente

import './assets/styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfileSelection />} />
        <Route path="/rematricula/aluno" element={<StudentForm />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;