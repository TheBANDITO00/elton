import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import PartyHomePage from './components/PartyHomePage';
import LocationPage from './components/LocationPage';
import RulesPage from './components/RulesPage';
import AboutPage from './components/AboutPage';
import GalleryPage from './components/GalleryPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<PartyHomePage />} />
          <Route path="/plats" element={<LocationPage />} />
          <Route path="/regler" element={<RulesPage />} />
          <Route path="/om-eventet" element={<AboutPage />} />
          <Route path="/bilder" element={<GalleryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;