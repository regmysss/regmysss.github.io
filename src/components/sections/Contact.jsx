import { socials } from "../../data/socials";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "../../styles/contact.css";
import { InfoSection } from "../ui/InfoSection";
import { Social } from "../ui/Social";

export const Contact = () => {
    const { t } = useTranslation();

    return (
        <section id="contact">
            <div className="contact-wrapper">
                <div className="contact-content">
                    <InfoSection
                        title={t("contact.title")}
                        description={t("contact.description")}
                    />
                    <div className="contact-list">
                        {socials.map((social, index) => (
                            <Social
                                key={index}
                                link={social.link}
                                animationDelay={index * 0.1}
                                typeSocial="fullSize"
                                ariaLabel={social.name}
                            >
                                <div className="contact-item">
                                    <div className="contact-details">
                                        <div className="contact-icon">
                                            <social.icon />
                                        </div>
                                        <div className="contact-info">
                                            <h3>{social.name}</h3>
                                            <p className="contact-link">
                                                {social.value}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <FaExternalLinkAlt size={20} />
                                    </div>
                                </div>
                            </Social>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
