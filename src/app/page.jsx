import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import AboutUs from './AboutUs';
import Collection from './Collection';
import Schedule from './Schedule';
import Services from './Services';
import Location from './Location';
import Footer from './Footer';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar options={['login']} />
            <Header />
            <AboutUs />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Collection />
                <Schedule />
                <Services />
                <Location />
            </div>
            <Footer />
        </div>
    );
}
