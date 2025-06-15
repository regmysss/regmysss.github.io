import { useEffect, useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';
import { useLocale } from '../hooks/useLocale';
import { getMenuItems } from '../data/menu';
import '../styles/header.css';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
    const { theme, toggleTheme } = useTheme();
    const { locale, changeLocale } = useLocale();
    const { t } = useTranslation();
    const menuItems = getMenuItems(t);

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

    const toggleMenu = () => {
        if (currentWidth >= 778) return;

        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header id='header'>
            <div className='header-wrapper'>
                <div className='header-content'>
                    {
                        currentWidth > 975 ?
                            (
                                <nav className='nav'>
                                    <ul className='nav-list'>
                                        {
                                            menuItems.map((item, index) => (
                                                <li
                                                    key={index}
                                                    onClick={toggleMenu}
                                                >
                                                    <a href={item.href}><item.icon />{t(item.label)}</a>
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
                                                            <a href={item.href}><item.icon />{t(item.localizationKey)}</a>
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
                        <div className='btns-container'>

                            <button className='btn-lang' onClick={() => changeLocale(locale === 'uk' ? 'en' : 'uk')}>
                                {
                                    <AnimatePresence mode='wait' initial={false}>
                                        {
                                            locale === 'uk'
                                                ? (<motion.img
                                                    key={'Moon'}
                                                    initial={{ scale: 0.5, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    exit={{ scale: 0.5, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    src="uk.svg"
                                                    className='icon'
                                                />)
                                                : (<motion.img
                                                    key={'Sun'}
                                                    initial={{ scale: 0.5, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    exit={{ scale: 0.5, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    src="en.svg"
                                                    className='icon'
                                                />)
                                        }
                                    </AnimatePresence>
                                }
                            </button>
                            <button className='btn-theme' onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}>
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
                        </div>
                        <button className='btn-menu' onClick={toggleMenu}>
                            <AnimatePresence mode='wait' initial={false}>
                                {
                                    isMenuOpen
                                        ?
                                        (
                                            <motion.span
                                                key={'Close'}
                                                initial={{ scale: 0.5, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0.5, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className='icon'
                                            >
                                                <FiX />
                                            </motion.span>
                                        )
                                        :
                                        (
                                            <motion.span
                                                key={'Menu'}
                                                initial={{ scale: 0.5, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0.5, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className='icon'
                                            >
                                                <FiMenu />
                                            </motion.span>
                                        )
                                }
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </div>
        </header >
    )
};