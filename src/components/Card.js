const Card = ({
    // id,
    // title,
    // description,
    // price,
    // popular,
    // picture,
    // setCard,
    // card,
    // setBasket,
    meal,
    card,
    setCard,
    setBasket,
    basket,
}) => {
    const onHandleClick = () => {
        let newValue = card.value ? card.value + 1 : 1;

        setCard({
            id: meal.id,
            value: newValue,
            title: meal.title,
            price: meal.price,
        });
        let newTab = [...basket];
        if (newTab) {
            newTab.push(card);
            setBasket(newTab);
        }
    };

    return (
        <div key={meal.id} className="card" onClick={onHandleClick}>
            <div className="left-card">
                <h4>{meal.title}</h4>
                <p>{meal.description}</p>
                <p>
                    <span>{`${meal.price}€ `}</span>
                    <span className="popular">{meal.popular && '★ Populaire'}</span>
                </p>
            </div>
            {meal.picture && (
                <div className="right-card">
                    <img src={`${meal.picture}`} alt="repas" />
                </div>
            )}
        </div>
    );
};

export default Card;
