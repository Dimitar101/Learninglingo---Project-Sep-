import { useState } from "react";
import SmallDoor from "./smallDoor/SmallDoor";


export default function HamburgerMenu() {
    const [onOrOff, setOnOrOff] = useState(false);
    const hamburgerClickHandler = () => {
        setOnOrOff(!onOrOff);
    }

    return (
        <>
            <button onClick={hamburgerClickHandler}>
                {onOrOff ? 'Close' : 'Open'} Hamburger Menu
            </button>
            {onOrOff && <SmallDoor />}
        </>
    );
}
