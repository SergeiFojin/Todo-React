import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage/TodoPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<HomePage />} />
      <Route path={'/todos/:_id/:value/:isCompleted'} element={<TodoPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
