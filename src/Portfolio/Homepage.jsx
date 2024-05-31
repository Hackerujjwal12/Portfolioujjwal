import React from 'react';
import Navbar from './Navbar';

import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}