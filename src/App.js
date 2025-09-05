import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HealthyNavigation } from './components/Header/Header';
import { HealthyFooter } from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import TopPage from './pages/TopPage/TopPage';
import MyRecord from './pages/MyRecord/MyRecord';
import Column from './pages/Column/Column';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <HealthyNavigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<TopPage />} />
            <Route path="/my-record" element={<MyRecord />} />
            <Route path="/column" element={<Column />} />
          </Routes>
        </main>
        <HealthyFooter />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
