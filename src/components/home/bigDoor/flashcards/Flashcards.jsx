import Word from "./Word";
import './flashcards.css'
import useFetch from "../../../../hooks/useFetch";


export default function Flashcards() {
    const url = 'http://localhost:3030/jsonstore/subjects';

    const { data: subjectCheck, setData: setSubjectCheck, isPending, error } = useFetch(url, [], result => Object.values(result));

    async function statusChangeHandler(subjId) {
        setSubjectCheck(prev => prev.map(sub => sub._id === subjId ? { ...sub, isPractised: !sub.isPractised } : sub));
    }
    
    if (error) {
        return <div>Not Found</div>;
    }

    return (
        <>
            <h1 className="welcome-heading">Quick Dictionary</h1>
            <hr />
            <div className="explain-welcome">Use this tool for quick learning only, once you navigate from the page the dictionary answers will close again.</div>

            <div className="table-wrapper">
                {isPending
                    ? <p>Loading...</p>
                    : <table>
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
                }
            </div>
        </>
    );
}
