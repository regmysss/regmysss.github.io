import { useTranslation } from "react-i18next";
import { getProjects } from "../../data/projects";
import "../../styles/projects.css";
import { InfoSection } from "../ui/InfoSection";
import { ProjectBox } from "../ui/ProjectBox";

export const Projects = () => {
    const { t } = useTranslation();
    const projects = getProjects(t);

    return (
        <section id="projects">
            <div className="projects-wrapper">
                <div className="projects-content">
                    <InfoSection
                        title={t("projects.title")}
                        description={t("projects.description")}
                    />
                    <div className="projects-list">
                        {projects.map((project, index) => (
                            <ProjectBox
                                key={index}
                                title={project.title}
                                description={project.description}
                                tecnologes={project.tecnologes}
                                images={project.images}
                                linkGithub={project.linkGithub}
                                linkDemo={project.linkDemo}
                                ariaLabel={project.ariaLabel}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
