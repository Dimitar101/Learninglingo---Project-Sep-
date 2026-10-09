import { useState } from "react"
import './yinyang.css'


export default function Yinyang() {
    const [colorYinyang, setColorYinyang] = useState(true);

    const yinYangClick = () => {
        setColorYinyang(!colorYinyang);
    }

    const spinner = colorYinyang ? 'ldr-yin-yang-spinner' : 'ldr-yin-yang-spinner-green';
    const disk = colorYinyang ? 'ldr-yin-yang-spinner-disc' : 'ldr-yin-yang-spinner-disc-green';


    return (
        <div className="yinyang">
            <svg className={spinner} viewBox="0 0 48 48" onClick={yinYangClick}>
                <circle className={disk} cx="24" cy="24" r="20"></circle>
                <path className="ldr-yin-yang-spinner-half" d="M24 4a20 20 0 0 1 0 40a10 10 0 0 1 0-20a10 10 0 0 0 0-20ZM20.7 34a3.3 3.3 0 1 0 6.6 0a3.3 3.3 0 1 0-6.6 0Z"></path>
                <circle className="ldr-yin-yang-spinner-dot" cx="24" cy="14" r="3.3"></circle>
            </svg>
        </div>
    );
}
