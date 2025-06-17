import { InfoSection } from "./UI/InfoSection/InfoSection";
import { ProjectBox } from "./UI/ProjectBox/ProjectBox";
import { useTranslation } from 'react-i18next';
import { getProjects } from "../data/projects";
import '../styles/projects.css';

export const Projects = () => {
    const { t } = useTranslation();
    const projects = getProjects(t);

    return (
        <section id="projects">
            <div className="projects-wrapper">
                <div className="projects-content">
                    <InfoSection title={t("projects.title")} description={t("projects.description")} />
                    <div className="projects-list">
                        {
                            projects.map((project, index) => (
                                <ProjectBox
                                    key={index}
                                    title={project.title}
                                    description={project.description}
                                    tecnologes={project.tecnologes}
                                    images={project.images}
                                    linkGithub={project.linkGithub}
                                    linkDemo={project.linkDemo}
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