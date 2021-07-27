import { useState } from 'react';

const Market = ({ card, basket, setBasket }) => {
    const [value, setValue] = useState(1);
    return (
        <div className={`market ${card ? 'empty' : 'not-empty'}`}>
            <button onClick={() => {}}>Valider mon panier</button>
            {value ? (
                <div className="panier">
                    <div>
                        <button
                            onClick={() => {
                                let newValue = value;
                                setValue(newValue - 1);
                            }}
                        >
                            -
                        </button>

                        <span>{value}</span>
                        <button
                            onClick={() => {
                                let newValue = value;
                                setValue(newValue + 1);
                            }}
                        >
                            +
                        </button>
                        <span>{card.title} </span>
                    </div>

                    <span>{card.price} €</span>
                </div>
            ) : null}
            <div>
                {/* <p>Pourboire livreur.euse </p> */}
                {value ? (
                    <p>
                        Total <span>"x.xx€"</span>
                    </p>
                ) : (
                    <p>Votre panier est vide</p>
                )}
            </div>
        </div>
    );
};

export default Market;
