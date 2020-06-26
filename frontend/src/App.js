import React from 'react';
import Dashboard from './components/Dashboard';
import Home from "./pages/Home";
import Foooter from './components/Foooter';
import './global.css'

export default function App() {
  return (
    <div>
    <Dashboard>
      <Home />
      <Foooter/>
    </Dashboard>
    </div>
    );
}
