import { InfoSection } from "./UI/InfoSection/InfoSection";
import '../styles/projects.css';
import { ProjectBox } from "./UI/ProjectBox/ProjectBox";

export const Projects = () => {

    return (
        <section className="projects">
            <div className="projects-content">
                <InfoSection title={"What I've Built"} description={"Here are some of the projects I have worked on that showcase my skills in web and mobile development."} />
                <div className="projects-list">
                    <ProjectBox
                        title={"Converter Files Tool"}
                        image={"https://i.imgur.com/Jqs86ZO.png"}
                        link={"https://github.com/regmysss/Converter-Files"}
                    />
                    <ProjectBox
                        title={"Detecting Food (AI)"}
                        image={"https://i.imgur.com/hhMVztz.png"}
                        link={"https://github.com/0deans/foodly"}
                    />
                    <ProjectBox
                        title={"Car Plate Recognition (AI)"}
                        image={"https://github.com/0deans/Car-Plate-Recognition/blob/main/demo/1.png?raw=true"}
                        link={"https://github.com/0deans/Car-Plate-Recognition"}
                    />
                    <ProjectBox
                        title={"Currency Converter"}
                        image={"https://i.imgur.com/AglXrZd.png"}
                        link={"https://github.com/regmysss/Currency-Converter"}
                    />
                    <ProjectBox
                        title={"Media Compressor Tool"}
                        image={"https://i.imgur.com/mrC9Wqy.png"}
                        link={"https://github.com/regmysss/Media-Compressor"}
                    />
                </div>
            </div>
        </section>
    );
};