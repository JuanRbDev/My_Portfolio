import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>

      <Header />

      <Routes basename="/My_Portfolio">
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Footer />

    </>
  );
}

export default App;
