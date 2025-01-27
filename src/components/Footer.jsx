import { Social } from './UI/Social/Social';
import { FiGithub, FiInstagram } from "react-icons/fi";
import { LiaTelegram } from "react-icons/lia";
import '../styles/footer.css';

export const Footer = () => {
    return (
        <footer id='footer'>
            <div className='footer-content'>
                <div className='footer-info'>
                    <div className='footer-about'>
                        <h2>Vladyslav Yarmolyuk</h2>
                        <p className='footer-subtitle'>A web developer who creates beautiful, intuitive, and functional websites that drive businesses to success.</p>
                    </div>
                    <div className='footer-socials'>
                        <h2>Social</h2>
                        <ul>
                            <Social link={"https://github.com/regmysss"}><FiGithub /></Social>
                            <Social link={"https://www.instagram.com/vlados.yrm/"}><FiInstagram /></Social>
                            <Social link={"https://t.me/regmysss"}><LiaTelegram /></Social>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className='footer-copyright-text'>&copy; Copyright {new Date().getFullYear()}. Made by Vladyslav Yarmolyuk</p>
            </div>
        </footer>
    )
};