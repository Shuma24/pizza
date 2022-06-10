import { Categories } from './components/Categories';
import { Header } from './components/Header';
import { PizzaBlock } from './components/PizzaBlock';
import { Sort } from './components/Sort';
import './scss/app.scss';
import React from 'react';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch('https://62a3ae4f21232ff9b22442a9.mockapi.io/items')
      .then((response) => response.json())
      .then((data) => setPizzas(data));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((pizza) => (
              <PizzaBlock key={pizza.id} {...pizza} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
