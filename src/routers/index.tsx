import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '~/pages/home';
import { User } from '~/pages/user';

export const Routers: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};
