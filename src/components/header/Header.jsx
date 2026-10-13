import { Link } from 'react-router'
import styles from './header.module.css'
import logo from '../../assets/logo.png'


export default function Header() {
    return (
        <header>
            <Link to="/" className={styles['logo']}>
                <img src={logo} />
            </Link>

            <nav>
                <Link to="/login" className={styles['navLinks']}>Login</Link>
                <Link to="/login" className={styles['navLinks']}>Login</Link>
            </nav>
        </header>
    );
}
