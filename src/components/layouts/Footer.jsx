import { socials } from "../../data/socials";
import { useTranslation } from "react-i18next";
import "../../styles/footer.css";
import { Social } from "../ui/Social";

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer id="footer">
            <div className="footer-wrapper">
                <div className="footer-content">
                    <p className="footer-copyright-text">
                        {t("footer.copyright", {
                            date: new Date().getFullYear(),
                        })}
                    </p>
                    <ul className="footer-socials-list">
                        {socials.map((social, index) => (
                            <Social
                                key={index}
                                link={social.link}
                                ariaLabel={social.name}
                            >
                                <social.icon />
                            </Social>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};
