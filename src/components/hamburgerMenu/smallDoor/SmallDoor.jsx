import { Link } from 'react-router';
import styles from './smallDoor.module.css'


export default function SmallDoor() {

    const sdOne = () => {
        console.log(1);
    }

    const sdTwo = () => {
        console.log(2);

    }
    const sdThree = () => {
        console.log(3);
    }


    return (
        <div className={styles['smallDoorWraper']}>
            <div className={styles['smallDoor']}><p onClick={sdOne}>small door 1</p></div>
            <div className={styles['smallDoor']}><p onClick={sdTwo}>small door 2</p></div>
            <div className={styles['smallDoor']}><p onClick={sdThree}>small door 3</p></div>
           <Link to='/rest-timer' className={styles['smallDoor']}>Rest Timer</Link>
        </div>
    );
}

