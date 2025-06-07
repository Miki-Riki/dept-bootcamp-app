import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ColorApp from './pages/ColorApp';

function App() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={isAuthenticated ? '/app' : '/login'} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/app" element={isAuthenticated ? <ColorApp /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
