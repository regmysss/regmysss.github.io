import { useContext, useEffect, useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { ModalContext } from '../context/ModalContext';
import { motion, AnimatePresence } from "framer-motion";
import { menuItems } from '../data/menu';
import '../styles/header.css';

export const Header = ({ theme, setTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
    const { setIsModalOpen } = useContext(ModalContext);

    useEffect(() => {
        const handleResize = () => {
            setCurrentWidth(window.innerWidth);
        }

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const toggleMenu = () => {
        if (currentWidth >= 640) return;

        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header id='header'>
            <div className='header-wrapper'>
                <div className='header-content'>
                    {
                        currentWidth >= 640 ?
                            (
                                <nav className='nav'>
                                    <ul className='nav-list'>
                                        {
                                            menuItems.map((item, index) => (
                                                <li
                                                    key={index}
                                                    onClick={toggleMenu}
                                                >
                                                    <a href={item.href}><item.icon />{item.label}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </nav>
                            )
                            :
                            (
                                <AnimatePresence>
                                    {
                                        isMenuOpen &&
                                        <motion.nav
                                            initial={{ height: 0 }}
                                            animate={{ height: 'auto' }}
                                            exit={{ height: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className='nav'
                                        >
                                            <ul className='nav-list'>
                                                {
                                                    menuItems.map((item, index) => (
                                                        <motion.li
                                                            key={index}
                                                            initial={{ opacity: 0, x: 100 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                                            onClick={toggleMenu}
                                                        >
                                                            <a href={item.href}><item.icon />{item.label}</a>
                                                        </motion.li>
                                                    ))
                                                }
                                            </ul>
                                        </motion.nav>
                                    }
                                </AnimatePresence>
                            )
                    }
                    <div className='header-buttons'>
                        <button className='btn-contact' onClick={() => setIsModalOpen(true)}>
                            Contact
                        </button>
                        <button className='btn-theme' onClick={toggleTheme}>
                            <AnimatePresence mode='wait' initial={false}>
                                {
                                    theme === 'light'
                                        ? (<motion.span
                                            key={'Moon'}
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.5, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className='icon'
                                        >
                                            <FiMoon />
                                        </motion.span>)
                                        : (<motion.span
                                            key={'Sun'}
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.5, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className='icon'
                                        >
                                            <FiSun />
                                        </motion.span>)
                                }
                            </AnimatePresence>
                        </button>
                        <button className='btn-menu' onClick={toggleMenu}>
                            {isMenuOpen ? <FiX /> : <FiMenu />}
                        </button>
                    </div>
                </div>
            </div>
        </header >
    )
};