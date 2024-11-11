"use client"

import React, { useEffect } from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import LoanManagement from './LoanManagement';
import InventoryManagement from './InventoryManagement';

const LibrarianPanel = () => {

  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  useEffect(() => {
    const token = getCookie('token');
    console.log(token);
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
