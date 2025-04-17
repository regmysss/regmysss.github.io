import { useContext } from 'react';
import '../styles/home.css';
import { ModalContext } from '../context/ModalContext';

export const Home = () => {
    const { setIsModalOpen } = useContext(ModalContext);

    return (
        <main>
            <section id='home'>
                <div className='home-content'>
                    <h1 className='home-title'>Hi, I&#39;m <span className='selection'>Vladyslav</span> - a Web Developer.</h1>
                    <p className='home-subtitle'>I specialize in creating <span className='selection'>responsive</span> and <span className='selection'>functional</span> websites to help businesses achieve <span>success</span>.</p>
                    <div className='home-buttons'>
                        <a href='#projects' className='btn-projects'>Projects</a>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className='btn-contact-home'
                        >Contact
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};