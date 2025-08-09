import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import CreateMeal from '@/pages/CreateMeal';
const Container = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
      <CreateMeal />
    </div>
  );
};

export default Container;
