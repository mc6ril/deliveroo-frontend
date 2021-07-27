const Card = ({ key, title, description, price, popular, picture }) => {
    return (
        <div key={key} className="card">
            <div className="left-card">
                <h2>{title}</h2>
                <p>{description}</p>
                <p>
                    <span>{price}</span>
                    <span>{popular}</span>
                </p>
            </div>
            {picture && (
                <div className="right-card">
                    <img src={`${picture}`} alt="repas" />
                </div>
            )}
        </div>
    );
};

export default Card;
