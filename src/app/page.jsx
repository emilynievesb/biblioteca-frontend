import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import AboutUs from './AboutUs';
import { Book, Clock, Users, Map } from 'lucide-react';
import InfoCard from './InfoCard';
import Footer from './Footer';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar options={['login']} />
            <Header />
            <AboutUs />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InfoCard title="Colección" Icon={Book}>
                    Contamos con más de 50,000 libros en diversos formatos, incluyendo libros impresos, e-books y audiolibros. Nuestra colección abarca una amplia
                    gama de géneros y temas.
                </InfoCard>
                <InfoCard title="Horario" Icon={Clock}>
                    Lunes a Viernes: 9:00 AM - 8:00 PM
                    <br />
                    Sábados: 10:00 AM - 6:00 PM
                    <br />
                    Domingos: Cerrado
                </InfoCard>
                <InfoCard title="Servicios" Icon={Users}>
                    <ul className="list-disc list-inside">
                        <li>Préstamo de libros</li>
                        <li>Acceso a computadoras e internet</li>
                        <li>Salas de estudio</li>
                        <li>Eventos literarios y culturales</li>
                        <li>Programas de lectura para niños</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Ubicación" Icon={Map}>
                    Calle Principal 123
                    <br />
                    Ciudad Ejemplo, CP 12345
                    <br />
                    Tel: (123) 456-7890
                    <br />
                    Email: info@bibliotech.com
                </InfoCard>
            </div>
            <Footer />
        </div>
    );
}
