import React from 'react'


type CategoriesProps = {
  categoryId: number,
  setId: (arg: number) => void,
}

export const Categories: React.FC<CategoriesProps> = React.memo(({ categoryId, setId }) => {
  
  const categories: string[] = ['Всі', 'Мясні', 'Веган', 'Гриль', 'Остра', 'Закрита'];

  const seLectCategory = (index: number): void => {
    setId(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value: string, index: number) => {
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
})
