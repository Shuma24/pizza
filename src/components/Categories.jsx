import React from 'react';

export function Categories({ categoryId, setId }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const seLectCategory = (index) => {
    setId(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => {
          return (
            <li
              key={index}
              onClick={() => seLectCategory(index)}
              className={categoryId === index ? 'active' : ''}>
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
