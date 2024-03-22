import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeView } from '~/Presentation/views/Home/HomeView';
import { UserView } from '~/Presentation/views/User/UserView';

export const Routers: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/user" element={<UserView />} />
      </Routes>
    </BrowserRouter>
  );
};
