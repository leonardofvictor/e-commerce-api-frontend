import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="bg-purple-600 text-white p-4">
          <h1 className="text-2xl font-bold">E-commerce API</h1>
          <p className="text-purple-200">Protótipo gerado pelo Vivo AI Team</p>
        </header>
        
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>
        
        <footer className="bg-gray-100 p-4 text-center text-gray-600">
          <p>Desenvolvido automaticamente pelo Vivo AI Team</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;