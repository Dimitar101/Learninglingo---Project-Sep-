import { Link } from 'react-router';
import './card.css'


export default function BigDoor() {
    const cards =
    {
        "1": {
            "id": "1",
            "gameName": "Calculator",
            "img": "../../src/assets/calc.jpg",
            "description": "Practicing arithmetic and multiplication for young learners, emphasizing simplicity and fun – very easy and super engaging.",
            "path": "/calculator"
        },
        "2": {
            "id": "2",
            "gameName": "Chessling",
            "img": "../../src/assets/ch.jpg",
            "description": "Learn the algebraic Chess notation square names by practicing. Click a square and see the name. View is from White perspective.",
            "path": "/chessling"
        },
        "3": {
            "id": "3",
            "gameName": "Geo - Inspirational Quotes",
            "img": "../../src/assets/geo.jpg",
            "description": "Browse, upload, and like inspirational quotes that uplift and motivate. Join a community that spreads positivity daily.",
            "path": "/geo"
        }
    }



    return (
        <>
            {/* <h1 id='welcome'>
                <Link to='welcome' style={{ textDecoration: 'none', color: '#81af81' }}>
                    Welcome
                </Link>
            </h1> */}
            <h1 id="welcome">Welcome</h1>

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
