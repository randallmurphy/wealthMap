import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './MainRouter';
import { ThemeProvider } from './context/ThemeProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthProvider';

const App = () => (
  <ThemeProvider>
    <AuthProvider>
      <BrowserRouter>
        <MainRouter />
        <ToastContainer position="top-right" autoClose={3000} />
      </BrowserRouter>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
