import React, { FC } from 'react';
import './Title.scss';

type VariantSizes = 'big' | 'medium-big' | 'medium' | 'small';

interface ITitle {
  level: number;
  size: VariantSizes;
  children: any;
}

const Title: FC<ITitle> = (props) => {
  const { level, children, size } = props;

  const variantSizes = {
    big: 'title_big',
    'medium-big': 'title_medium-big',
    medium: 'title_medium',
    small: 'title_small'
  };

  const classes = ['title', variantSizes[size]].join(' ');

  if (level === 1) {
    return <h1 className={classes}>{children}</h1>;
  }

  if (level === 2) {
    return <h2 className={classes}>{children}</h2>;
  }

  if (level === 3) {
    return <h3 className={classes}>{children}</h3>;
  }

  if (level === 4) {
    return <h4 className={classes}>{children}</h4>;
  }

  if (level === 5) {
    return <h5 className={classes}>{children}</h5>;
  }

  if (level === 6) {
    return <h6 className={classes}>{children}</h6>;
  }

  return <h6 className={classes}>{children}</h6>;
};

export type { ITitle };
export { Title };
