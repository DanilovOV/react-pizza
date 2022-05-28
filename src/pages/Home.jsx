import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import { SearchContext } from '../App';

const Home = () => {
  const { searchValue } = React.useContext(SearchContext);
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryID, setCategoryID] = React.useState(0);
  const [sortMethod, setSortMethod] = React.useState({
    name: 'популярности',
    method: 'rating',
  });

  React.useEffect(() => {
    setIsLoading(true);

    const category = categoryID > 0 ? `category=${categoryID}` : '';
    const sortBy = sortMethod.method.replace('-', '');
    const order = sortMethod.method.includes('-') ? 'desc' : 'asc';
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://628e4808a339dfef87ab4f4b.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((response) => response.json())
      .then((pizzasArr) => {
        setPizzas(pizzasArr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryID, sortMethod, searchValue]);

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  const pizzaBlocks = pizzas.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryID} onChangeCategory={(id) => setCategoryID(id)} />
        <Sort sortMethod={sortMethod} onChangeSort={(method) => setSortMethod(method)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzaBlocks}</div>
    </div>
  );
};

export default Home;
