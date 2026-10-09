import { useState } from "react"
import SquareItem from "./squareItem/SquareItem"
import squares from "./squareItem/squares"
import './ChessSquares.css'


export default function ChessSquares() {
    const [board, setBoard] = useState(Object.values(squares));
    const [clicked, setClicked] = useState('---');

    const sqrClick = (sqrId, sqrAlgebraicName) => {
        setClicked(sqrAlgebraicName);

        setBoard(prev => prev.map(SQR => SQR._id === sqrId ? { ...SQR, isMarked: !SQR.isMarked } : SQR));
        setBoard(prev => prev.map(SQR => SQR._id !== sqrId ? { ...SQR, isMarked: false } : SQR));
    }


    return (
        <>
            <h1 className="chessling-header">Chessling</h1>
            <hr />

            <div className="instr">You clicked square:</div>
            <br />

            <div className="answer">{clicked}</div>

            <div className="chessling">
                <SquareItem sqrClick={sqrClick} board={board} />
            </div>
        </>
    );
}
