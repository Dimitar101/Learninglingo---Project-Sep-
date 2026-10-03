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
        <>
            <h2 className={styles['smallDoor']} onClick={sdOne}>small door 1</h2>
            <h2 className={styles['smallDoor']} onClick={sdTwo}>small door 2</h2>
            <h2 className={styles['smallDoor']} onClick={sdThree}>small door 3</h2>
        </>
    );
}
