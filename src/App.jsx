import './App.css'

import { Routes, Route } from 'react-router'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import Home from './components/home/Home'
import ChessSquares from './components/home/bigDoor/chessSquares/ChessSquares'
// import SmallDoor from './components/hamburgerMenu/smallDoor/SmallDoor'
// import Plus from './components/hamburgerMenu/plus/Plus'
import HamburgerMenu from './components/hamburgerMenu/HamburgerMenu'
import RestTimer from './components/hamburgerMenu/smallDoor/restTimer/RestTimer'


export default function App() {
    return (
        <>
            <Header />
            <HamburgerMenu />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chessling" element={<ChessSquares />} />
                <Route path="/rest-timer" element={<RestTimer />} />
                <Route path="/login" element={<Login />} />
            </Routes>

            <Footer />
        </>
    );
}
