import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '~/pages/home';
import { Repository } from '~/pages/repository';

export const Routers: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repository" element={<Repository />} />
      </Routes>
    </BrowserRouter>
  );
};
