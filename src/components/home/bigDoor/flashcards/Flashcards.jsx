import { useEffect, useState } from "react";
import Word from "./Word";
import './flashcards.css'
// const url = 'http://localhost:3030/jsonstore/subjects';


export default function Flashcards() {
    const [subjectCheck, setSubjectCheck] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/subjects')
            .then(res => res.json())
            .then(data => {
                const result = Object.values(data);
                setSubjectCheck(result);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, []);

    async function statusChangeHandler(subjId, subject_C, isPractised_C) {
        setSubjectCheck(prev => prev.map(sub => sub._id === subjId ? { ...sub, isPractised: !sub.isPractised } : sub));
    }


    return (
        <>
            <h1 className="welcome-heading">Quick Dictionary</h1>
            <hr />
            <p className="explain-welcome">(Use this tool for quick learning only, once you navigate from the page the dictionary answers will close again.)</p>

            <div className="table-wrapper">
                <table>
                    <tbody>
                        {subjectCheck.map(subj =>
                            <Word
                                key={subj._id}
                                _id={subj._id}
                                subject={subj.subject}
                                answer={subj.answer}
                                isPractised={subj.isPractised}
                                onStatusChangeAfterToggleBtnClick={statusChangeHandler}
                            />
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}
