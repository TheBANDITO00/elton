import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import PartyHomePage from './components/PartyHomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PartyHomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;