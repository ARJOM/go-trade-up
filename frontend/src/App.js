import React from 'react';
import Dashboard from './components/Dashboard';
import CadastroCliente from './components/Cadastro-Cliente';
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
