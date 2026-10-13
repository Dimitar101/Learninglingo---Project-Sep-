import { useState } from "react";
import './hamburgerMenu.css'
import SmallDoor from "./smallDoor/SmallDoor";


export default function HamburgerMenu() {
    const [onOrOff, setOnOrOff] = useState(false);
    const hamburgerClickHandler = () => {
        setOnOrOff(!onOrOff);
    }

    return (
        <>
            <div className="hamburger">
                <button onClick={hamburgerClickHandler} className="hamburgerText">
                    <p>
                        {onOrOff ? 'Close' : 'Open'} Hamburger Menu
                    </p>
                </button>
            </div>
            <div>
                {onOrOff && <SmallDoor />}
            </div>
        </>
    );
}
