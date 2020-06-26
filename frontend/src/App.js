import React from 'react';
import Dashboard from './components/Dashboard';
import CadastroCliente from './pages/CadastroCliente';
import './global.css'

export default function App() {
  return (
    <div>
    <Dashboard>
      <CadastroCliente />
    </Dashboard>
    </div>
    );
}
