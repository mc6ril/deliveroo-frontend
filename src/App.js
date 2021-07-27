import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faHome, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Market from './components/Market';
library.add(faShoppingBasket, faHome, faBars);

function App() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [card, setCard] = useState({});
    const [basket, setBasket] = useState([]);

    // chargement de la data depuis le back
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://deliveroo-backend-cyril.herokuapp.com/',
                );
                setData(response.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchData();
    }, []);

    console.log('mon panier', basket);
    console.log('ma carte', card); //ma carte {id: "1519055545-88", title: "Brunch authentique 1 personne", price: 25}

    //Loader
    return isLoading ? (
        <div className="loader">
            <span className="letter">C</span>
            <span className="letter">H</span>
            <span className="letter">A</span>
            <span className="letter">R</span>
            <span className="letter">G</span>
            <span className="letter">E</span>
            <span className="letter">M</span>
            <span className="letter">E</span>
            <span className="letter">N</span>
            <span className="letter">T</span>
        </div>
    ) : (
        //fin du loader
        <div className="App">
            <div className="content">
                <div className="bg-header">
                    <Header
                        restaurant={data.restaurant.name}
                        description={data.restaurant.description}
                        image={data.restaurant.picture}
                    />
                </div>

                <section>
                    <div className="all-categories">
                        {data.categories.map((category, index) => {
                            return (
                                <div key={index} className="category">
                                    <h3>{category.name}</h3>
                                    <div className="category-card">
                                        {category.meals.map((meal, i) => {
                                            //Je retourne toutes mes cartes dans mes sections
                                            return (
                                                <Card
                                                    key={meal.id}
                                                    meal={meal}
                                                    card={card}
                                                    setCard={setCard}
                                                    setBasket={setBasket}
                                                    basket={basket}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {/* je retourne mon panier */}
                    <Market
                        basket={basket}
                        card={card}
                        setBasket={setBasket}
                        onClick={card}
                    />
                </section>
            </div>
        </div>
    );
}

export default App;
