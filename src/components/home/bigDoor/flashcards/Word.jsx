import styles from './Word.module.css'


export default function Word(
    {
        _id,
        subject,
        answer,
        isPractised,
        onStatusChangeAfterToggleBtnClick,
    }
) {

    return (
        <tr className={isPractised ? styles['yesCheck'] : styles['noCheck']}>
            <td className='questionWord'>{subject}</td>
            <td className='answerWord'>{answer}</td>
            <td>
                <button
                    className="check-studies-btn"
                    onClick={() => onStatusChangeAfterToggleBtnClick(_id, subject, isPractised)}
                >{isPractised ? 'Hide' : 'Answer'} </button>
            </td>
        </tr>
    );
}
