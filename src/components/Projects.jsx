import { InfoSection } from "./UI/InfoSection/InfoSection";
import '../styles/projects.css';

export const Projects = () => {

    return (
        <section className="projects">
            <div className="projects-content">
                <InfoSection title={"What I've Built"} description={"Here are some of the projects I have worked on that showcase my skills in web and mobile development."} />
                
            </div>
        </section>
    );
};