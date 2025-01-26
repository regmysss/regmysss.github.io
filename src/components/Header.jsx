import '../styles/header.css';
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

export const Header = ({ theme, setTheme }) => {

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <header id='header'>
            <div className='header-content'>
                <nav className='nav'>
                    <ul className='nav-list'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#about">About</a></li>
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