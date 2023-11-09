import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Message from './Message';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Message />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
