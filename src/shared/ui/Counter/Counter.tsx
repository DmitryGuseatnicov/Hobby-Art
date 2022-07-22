import React, { FC } from 'react';
import './Counter.scss';

interface ICounter {
  // eslint-disable-next-line no-unused-vars
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  value: number;
}

const Counter: FC<ICounter> = (props) => {
  const { value, onClick } = props;

  return (
    <div className="counter">
      <button className="counter__button" type="button" data-action="decrement" onClick={onClick}>
        -
      </button>
      <span className="counter__value">{value}</span>
      <button className="counter__button" type="button" data-action="increment" onClick={onClick}>
        +
      </button>
    </div>
  );
};

export { Counter };
