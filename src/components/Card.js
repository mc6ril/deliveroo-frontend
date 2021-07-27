const Card = ({ id, title, description, price, popular, picture }) => {
    return (
        <div key={id} className="card">
            <div className="left-card">
                <h4>{title}</h4>
                <p>{description}</p>
                <p>
                    <span>{`${price.replace('.', ',')}€ `}</span>
                    <span className="popular">{popular && '★ Populaire'}</span>
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
