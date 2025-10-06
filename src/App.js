import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminLayout from './pages/AdminLayout';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to="/admin" replace />
              ) : (
                <LoginPage onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/admin"
            element={
              isAuthenticated ? (
                <AdminLayout onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/"
            element={
              <Navigate to={isAuthenticated ? "/admin" : "/login"} replace />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
