import { useState } from "react";
import "./restTimer.css"


export default function RestTimer() {
    const [seconds, setSeconds] = useState(0);

    setTimeout(() => {
        // console.log(seconds);
        setSeconds(prev => prev + 1);
    }, 1000);

    return (
        <>
            <div>
                <h2 className="timeSign"><u>Timer</u></h2>
                <div className="secondsPart">{seconds}</div>
                <div className="secondsPart">seconds</div>
            </div>
        </>
    );
}
