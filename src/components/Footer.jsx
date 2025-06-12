import { Social } from './UI/Social/Social';
import { socials } from '../data/socials';
import { motion } from 'framer-motion';
import '../styles/footer.css';

export const Footer = () => {
    return (
        <footer id='footer'>
            <div className='footer-wrapper'>
                <div className='footer-content'>
                    <div className='footer-info'>
                        <div className='footer-about'>
                            <motion.h2
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                Vladyslav Yarmolyuk
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className='footer-subtitle'
                            >
                                A web developer who creates beautiful, intuitive, and functional websites that drive businesses to success.
                            </motion.p>
                        </div>
                        <div className='footer-socials'>
                            <motion.h2
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                Social
                            </motion.h2>
                            <ul>
                                {
                                    socials.map((social, index) => (
                                        <Social key={index} link={social.link} aminationDelay={index * 0.2}>
                                            <social.icon />
                                        </Social>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <motion.hr
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className='footer-copyright-text'
                    >&copy; Copyright {new Date().getFullYear()}. Made by Vladyslav Yarmolyuk
                    </motion.p>
                </div>
            </div>
        </footer>
    )
};