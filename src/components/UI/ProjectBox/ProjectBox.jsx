import './projectBox.css';

export const ProjectBox = ({ title, image, link }) => {
    return (
        <div className="project-box">
            <a href={link}>
                <div className="project-box-image-container">
                    <img className="project-box-image" src={image} alt={title} />
                </div>
                <h3>{title}</h3>
            </a>
        </div>
    );
};