import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import LoanManagement from './LoanManagement';
import InventoryManagement from './InventoryManagement';

const LibrarianPanel = () => {
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
