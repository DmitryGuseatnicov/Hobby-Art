import React, { FC } from 'react';
import './ColorList.scss';

interface IColorList {
  colors: string[];
  size: 'big' | 'small';
  visibleElements: 'all' | 'reduced';
}

const ColorList: FC<IColorList> = (props) => {
  const { colors, size, visibleElements } = props;

  const sizes = {
    big: 'color-list_big',
    small: 'color-list_small'
  };

  const classes = ['color-list', sizes[size]].join(' ');

  if (visibleElements === 'all') {
    return (
      <ul className={classes}>
        {colors.map((color) => (
          <li className="color-list__item" style={{ background: color }} />
        ))}
      </ul>
    );
  }

  return (
    <ul className={classes}>
      {colors.map((color, index) => {
        if (index <= 3) {
          return <li className="color-list__item" style={{ background: color }} />;
        }
        if (index === 4) {
          return <li className="color-list__last-length">+{colors.length - index}</li>;
        }
        return '';
      })}
    </ul>
  );
};

export { ColorList };
