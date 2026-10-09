import './App.css'

import { Routes, Route } from 'react-router';

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import Home from './components/home/Home';
import SmallDoor from './components/smallDoor/SmallDoor';
import Yinyang from './components/yinyang/Yinyang';


export default function App() {
    return (
        <>
            <Header />
            <SmallDoor />



            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>




            <Yinyang />
            <Footer />

            <Login />
        </>
    )
}
