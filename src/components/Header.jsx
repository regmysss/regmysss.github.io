import '../styles/header.css';
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

export const Header = ({ theme, setTheme }) => {

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <header className='header'>
            <div className='header-content'>
                <nav className='nav'>
                    <ul className='nav-list'>
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Skills</li>
                        <li>About</li>
                    </ul>
                </nav>
                <div className='header-right'>
                    <button className='btn-contact'>
                        Contact
                    </button>
                    <button className='btn-theme' onClick={toggleTheme}>
                        {
                            theme === 'dark' ?
                                <IoSunnyOutline className='icon-theme' /> :
                                <IoMoonOutline className='icon-theme' />
                        }
                    </button>
                </div>
            </div>
        </header>
    )
};