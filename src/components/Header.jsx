import '../styles/header.css';
import { WiDaySunny } from "react-icons/wi";

export const Header = ({ theme, setTheme }) => {

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <header className='header'>
            <nav className='nav'>
                <ul className='nav-list'>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Skills</li>
                    <li>About</li>
                </ul>
            </nav>
            <div className=''>
                <button className='btn-contact'>
                    Contact
                </button>
                <button className='btn-theme' onClick={toggleTheme}>
                    <WiDaySunny className='icon-theme' />
                </button>
            </div>
        </header>
    )
};