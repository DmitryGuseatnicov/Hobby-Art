import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Icon, IconsName } from '../Icon/Icon';
import './Button.scss';

type ButtonModification = 'with-icon' | 'pink' | 'transparent';
type ButtonHeight = 'short' | 'standard';

interface IButton {
  modification: ButtonModification;
  height: ButtonHeight;
  icon?: IconsName;
  isSubmit?: boolean;
  link?: string;
  onClick?: () => void;
  children: any;
}

const Button: FC<IButton> = (props) => {
  const { modification, height, children, onClick, link, icon = '', isSubmit = '' } = props;
  const variantModifiers = {
    'with-icon': 'button_with-icon',
    pink: 'button_pink',
    transparent: 'button_transparent'
  };

  const variantHeights = {
    short: 'button_height-short',
    standard: 'button_height-standard'
  };

  const classes = ['button', variantModifiers[modification], variantHeights[height]].join(' ');

  const elementWithIcon = (
    <div className="button__inner">
      <div className="button__icon">
        <span className="button__icon-svg">{icon && <Icon type={icon} />}</span>
      </div>
      <span className="button__text">{children}</span>
    </div>
  );

  const element = (
    <div className="button__inner">
      <span className="button__text">{children}</span>
    </div>
  );

  if (modification === 'with-icon') {
    if (link) {
      return (
        <Link className={classes} to={link}>
          {elementWithIcon}
        </Link>
      );
    }
    return (
      <button type={isSubmit ? 'submit' : 'button'} className={classes} onClick={onClick}>
        {elementWithIcon}
      </button>
    );
  }

  if (modification === 'pink') {
    if (link) {
      return (
        <Link className={classes} to={link}>
          {element}
        </Link>
      );
    }
    return (
      <button type={isSubmit ? 'submit' : 'button'} className={classes} onClick={onClick}>
        {element}
      </button>
    );
  }

  if (modification === 'transparent') {
    if (link) {
      return (
        <Link className={classes} to={link}>
          {elementWithIcon}
        </Link>
      );
    }
    return (
      <button type={isSubmit ? 'submit' : 'button'} className={classes} onClick={onClick}>
        {element}
      </button>
    );
  }

  if (link) {
    return (
      <Link className={classes} to={link}>
        {children}
      </Link>
    );
  }

  return (
    <button type={isSubmit ? 'submit' : 'button'} onClick={onClick}>
      {children}
    </button>
  );
};

export type { IButton };
export { Button };
