import './App.css'

import { Routes, Route } from 'react-router'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import Home from './components/home/Home'
import SmallDoor from './components/smallDoor/SmallDoor'
import ChessSquares from './components/home/bigDoor/chessSquares/ChessSquares'


export default function App() {
    return (
        <>
            <Header />
            <SmallDoor />



            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chessling" element={<ChessSquares />} />
            </Routes>




            <Footer />

            <Login />
        </>
    )
}
