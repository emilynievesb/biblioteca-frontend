import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import UserManagement from './UserManagement';
import InventoryManagement from './InventoryManagement';
import ReportsSection from './ReportsSection';

const AdminPanel = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <NavBar options={["home", "logout"]} />
            <div className="space-y-6 p-4">
                <h1 className="text-3xl font-bold">Panel de Administrador</h1>
                <UserManagement />
                <InventoryManagement />
                <ReportsSection />
            </div>
            <Footer />
        </div>
    );
};

export default AdminPanel;
