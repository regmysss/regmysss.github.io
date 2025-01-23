import './infoSection.css';

export const InfoSection = ({ title, description }) => {
    return (
        <div className="info-section">
            <h2 className="info-section-title">{title}</h2>
            <p className="info-section-text">{description}</p>
            <hr />
        </div>
    );
};