import React from 'react';
import Dashboard from './components/Dashboard';
import Foooter from './components/Foooter';
import './global.css'
import Routes from "./Routes";

export default function App() {
  return (
    <div>
    <Dashboard>
      <Routes/>
      <Foooter/>
    </Dashboard>
    </div>
    );
}
