import React from 'react';
import { useSelector } from 'react-redux';
import { cartSelectorById } from '../../redux/slices/cart/selector';
import { addProduct } from '../../redux/slices/cart/slice';
import { useAppDispatch } from '../../redux/store';
import { cartItem } from '../../redux/slices/cart/types';

interface PizzaBlockProps {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
}

// values
const pizzaTypes = ['тонкое', 'традиционное'];

export const PizzaBlock: React.FC<PizzaBlockProps> = ({
  id,
  imageUrl,
  title,
  types,
  sizes,
  price,
}) => {
  //lib
  const dispatch = useAppDispatch();

  //states
  const [activeType, setActiveType] = React.useState<number>(0);
  const [activeSize, setActiveSize] = React.useState<number>(0);

  //logic
  const setType = (index: number) => {
    setActiveType(index);
  };

  const setSize = (index: number) => {
    setActiveSize(index);
  };

  const onClickAdd = () => {
    const product: cartItem = {
      id,
      title,
      price,
      imageUrl,
      types: pizzaTypes[activeType],
      sizes: sizes[activeSize],
      count: 0,
    };
    dispatch(addProduct(product));
  };

  const cartItem = useSelector(cartSelectorById(id));
  const addCount = cartItem ? cartItem.count : 0;
  //render
  return (
    <div className="pizza-block-wrapper">
      <div id={id} className="pizza-block">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((types, index) => (
              <li
                key={index}
                className={activeType === types ? 'active' : ''}
                onClick={() => setType(index)}>
                {pizzaTypes[types]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, index) => (
              <li
                key={index}
                className={activeSize === index ? 'active' : ''}
                onClick={() => setSize(index)}>
                {size}см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">{`от ${price} ₴`}</div>
          <button onClick={onClickAdd} className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {addCount > 0 && <i>{addCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};
