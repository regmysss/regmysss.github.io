import { Social } from './UI/Social/Social';
import { socials } from '../data/socials';
import '../styles/footer.css';

export const Footer = () => {
    return (
        <footer id='footer'>
            <div className='footer-wrapper'>
                <div className='footer-content'>
                    <p className='footer-copyright-text'       >
                        &copy; Copyright {new Date().getFullYear()}. Made by Vladyslav Yarmolyuk
                    </p>
                    <ul className='footer-socials-list'>
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
        </footer>
    )
};