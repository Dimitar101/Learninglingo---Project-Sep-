import './App.css'

import { Routes, Route } from 'react-router';

import Header from './components/header/Header'
// import Doors from './components/doors/Doors'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import Home from './components/home/Home';
import SmallDoor from './components/smallDoor/smallDoor';


export default function App() {
    return (
        <>
            <Header />
            <SmallDoor />



            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>




            <Footer />

            <Login />
        </>
    )
}
