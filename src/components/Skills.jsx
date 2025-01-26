import { InfoSection } from "./UI/InfoSection/InfoSection";
import '../styles/skills.css';

export const Skills = () => {
    return (
        <section id="skills">
            <div className="skills-content">
                <InfoSection
                    title={"What I Know"}
                    description={"Here are the technologies and tools I use to create efficient and user-friendly solutions."}
                />
                <div className="skills-list">
                    <div className="skills-column">
                        <h3>Frontend Development</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>TypeScript</li>
                            <li>Tailwindcss</li>
                        </ul>
                    </div>
                    <div className="skills-column">
                        <h3>Backend Development</h3>
                        <ul>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Hono</li>
                            <li>C#</li>
                            <li>PostgreSQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                    <div className="skills-column">
                        <h3>Mobile Development</h3>
                        <ul>
                            <li>Flutter</li>
                            <li>Dart</li>
                        </ul>
                    </div>
                    <div className="skills-column">
                        <h3>Other Skills</h3>
                        <ul>
                            <li>REST API</li>
                            <li>Git</li>
                            <li>Kanban</li>
                            <li>Docker</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};