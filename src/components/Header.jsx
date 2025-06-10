import { useContext, useState } from 'react';
import '../styles/header.css';
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { ModalContext } from '../context/ModalContext';
import { FiHome, FiTv, FiLayers, FiUser } from "react-icons/fi";

export const Header = ({ theme, setTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { setIsModalOpen } = useContext(ModalContext);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header id='header'>
            <div className='header-content'>
                <nav className='nav'>
                    <ul className='nav-list'>
                        <li><a href="#home"><FiHome />Home</a></li>
                        <li><a href="#projects"><FiTv />Projects</a></li>
                        <li><a href="#skills"><FiLayers />Skills</a></li>
                        <li><a href="#about"><FiUser />About</a></li>
                    </ul>
                </nav>
                <div className='header-btns'>
                    <button className='btn-contact' onClick={() => setIsModalOpen(true)}>
                        Contact
                    </button>
                    <button className='btn-theme' onClick={toggleTheme}>
                        {
                            theme === 'dark' ?
                                <FiSun className='icon-theme' /> :
                                <FiMoon className='icon-theme' />
                        }
                    </button>
                </div>
                <div className='header-mobile'>
                    <button
                        className='btn-menu'
                        onClick={toggleMenu}>
                        {
                            isMenuOpen ?
                                <FiX /> :
                                <FiMenu />
                        }
                    </button>
                    {
                        isMenuOpen &&
                        <nav className='nav-mobile'>
                            <ul className='nav-list'>
                                <li onClick={toggleMenu}><a href="#home">Home</a></li>
                                <li onClick={toggleMenu}><a href="#projects">Projects</a></li>
                                <li onClick={toggleMenu}><a href="#skills">Skills</a></li>
                                <li onClick={toggleMenu}><a href="#about">About</a></li>
                            </ul>
                        </nav>
                    }
                </div>
            </div>
        </header>
    )
};