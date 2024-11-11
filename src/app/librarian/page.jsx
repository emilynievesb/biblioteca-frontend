"use client"

import React, { useEffect } from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import LoanManagement from './LoanManagement';
import InventoryManagement from './InventoryManagement';

const LibrarianPanel = () => {

  useEffect(() => {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='));
    if (!token) {
      window.location.href = '/login';
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar options={["home", "logout"]} />
      <section className="p-4">
        <h1 className="text-3xl font-bold">Panel de Bibliotecario</h1>
        <LoanManagement />
        <InventoryManagement />
      </section>
      <Footer />
    </div>
  );
};

export default LibrarianPanel;
