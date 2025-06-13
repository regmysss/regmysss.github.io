import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';
import { motion } from 'framer-motion';
import '../styles/home.css';

export const Home = () => {
    const { setIsModalOpen } = useContext(ModalContext);

    return (
        <main>
            <section id='home'>
                <div className='home-wrapper'>
                    <div className='home-content'>
                        <motion.h1
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className='home-title'
                        >
                            Hi, I&#39;m <span className='selection'>Vladyslav</span> - a Web Developer.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className='home-subtitle'
                        >
                            I specialize in creating <span className='selection'>responsive </span>
                            and <span className='selection'>functional</span> websites to help businesses achieve <span>success</span>.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: -40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className='home-buttons'
                        >
                            <a href='#projects' className='btn-projects'>Projects</a>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className='btn-contact-home'
                            >Contact
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
};