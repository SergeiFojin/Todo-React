import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Global } from './global';
import HomePage from './pages/Homepage/HomePage';
import TodoPage from './pages/TodoPage/TodoPage';
import LoginPage from './pages/LoginPage/LoginPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<LoginPage />} />
      <Route path={'/todos'} element={<HomePage />} />
      <Route path={'/todos/:_id/:value/:isCompleted'} element={<TodoPage />} />
    </Routes>
    <Global />
  </BrowserRouter>
);

export default App;
