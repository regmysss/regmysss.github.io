import { InfoSection } from "./UI/InfoSection/InfoSection";
import { ProjectBox } from "./UI/ProjectBox/ProjectBox";
import { projects } from "../data/projects";
import { useTranslation } from 'react-i18next';
import '../styles/projects.css';

export const Projects = () => {
    const { t } = useTranslation();

    return (
        <section id="projects">
            <div className="projects-wrapper">
                <div className="projects-content">
                    <InfoSection title={t("projectsTitle")} description={t("projectsDescription")} />
                    <div className="projects-list">
                        {
                            projects.map((project, index) => (
                                <ProjectBox
                                    key={index}
                                    localizationKey={project.localizationKey}
                                    image={project.image}
                                    link={project.link}
                                    animationDelay={index * 0.1}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};