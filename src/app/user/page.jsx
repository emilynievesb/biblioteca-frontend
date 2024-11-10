import React from 'react';
import NavBar from '../NavBar';
import BookSearch from './BookSearch';
import MyBooks from './MyBooks';
import Footer from '../Footer';

const UserPanel = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar options={["home", "logout"]} />
            <main className="space-y-6 p-4">
                <h1 className="text-3xl font-bold">Panel de Usuario</h1>
                <BookSearch />
                <MyBooks />
            </main>
            <Footer />
        </div>
    );
};

export default UserPanel;
