import { useParams } from 'react-router-dom';

export const Pizzatest = (): JSX.Element => {
  const { id } = useParams();

  return <div>${id}</div>;
};
