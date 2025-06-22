import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroHeader from './components/HeroHeader';
import Footer from './components/Footer';
import Services from './components/Services';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import Events from './components/Events';
import DownloadApp from './components/DownloadApp';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroHeader />
              <main>
                <Services />
                <Features />
                <Testimonial />
                <Events />
                <DownloadApp />
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
