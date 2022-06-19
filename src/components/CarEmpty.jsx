import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/img/empty-cart.png';

export const CarEmpty = () => {
  return (
    <>
      <div className="container container--cart">
        <div className="cart cart--empty">
          <h2>Корзина пуста 😕</h2>
          <p>
            Вірогідніше всього, ви ще не замовляли піццу.
            <br />
            Для того, щоб заказати піццу, перейди на главну сторінку.
          </p>
          <img src={img} alt="Empty cart" />
          <Link to="/" className="button button--black">
            <span>Вернутись назад</span>
          </Link>
        </div>
      </div>
    </>
  );
};
