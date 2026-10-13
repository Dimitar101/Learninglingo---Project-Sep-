import { useState } from "react";


export default function RestTimer() {
    const [seconds, setSeconds] = useState(0);

    setTimeout(() => {
        // console.log(seconds);
        setSeconds(prev => prev + 1);
    }, 1000);

    return (
        <>
            <h2><u>Timer</u></h2>
            <div>{seconds} seconds</div>
        </>
    );
}
