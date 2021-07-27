import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';

function App() {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

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
        // return;
        // ce qui va se passer quand le composant est démonté
    }, []);

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
        <div className="App">
            <Header />
            <section>
                {data.categories.map((category, index) => {
                    return (
                        <div key={index} className="category">
                            <h1>{category.name}</h1>
                            <div key={index} className="category-card">
                                {category.meals.map((card) => {
                                    return (
                                        <Card
                                            title={card.title}
                                            description={card.description}
                                            key={card.id}
                                            price={card.price}
                                            popular={card.popular}
                                            picture={card.picture}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </section>
        </div>
    );
}

export default App;
