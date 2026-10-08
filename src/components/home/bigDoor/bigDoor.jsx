import { Link } from 'react-router';
import cards from './cards'
import './card.css'


export default function BigDoor() {
    return (
        <>
            <h1 id="welcome">Welcome</h1>
            {/* '#81af81' */}

            <div className="cards">
                {
                    Object.values(cards).map((card) => (
                        <article key={card.id}>
                            <div className="card-picture">
                                <img src={card.img} />
                            </div>
                            <div className="face-elements">
                                <h3>{card.gameName}</h3>
                                <p>{card.description}</p>
                                <Link className="card-button" to={card.path} >
                                    START
                                </Link>
                            </div>
                        </article>
                    ))
                }
            </div>
        </>
    );
}
