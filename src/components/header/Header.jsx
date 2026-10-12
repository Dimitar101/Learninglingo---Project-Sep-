import { Link } from 'react-router'
import styles from './header.module.css'


export default function Header() {
    return (
        <header>
            <Link to="/">Home</Link>

            <nav>
                <Link to="/login" className={styles['navLinks']}>Login</Link>
                <Link to="/login" className={styles['navLinks']}>Login</Link>
            </nav>

        </header>
    );
}
