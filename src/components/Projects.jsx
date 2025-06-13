import { InfoSection } from "./UI/InfoSection/InfoSection";
import { ProjectBox } from "./UI/ProjectBox/ProjectBox";
import { projects } from "../data/projects";
import '../styles/projects.css';

export const Projects = () => {
    return (
        <section id="projects">
            <div className="projects-wrapper">
                <div className="projects-content">
                    <InfoSection title={"What I've Built"} description={"Here are some of the projects I have worked on that showcase my skills in web and mobile development."} />
                    <div className="projects-list">
                        {
                            projects.map((project, index) => (
                                <ProjectBox
                                    key={index}
                                    title={project.title}
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