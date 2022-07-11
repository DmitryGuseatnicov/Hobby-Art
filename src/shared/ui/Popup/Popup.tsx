import React, { FC } from 'react';

import './Popup.scss';

interface IPopup {
  children?: any;
  isVisible?: boolean;
}

const Popup: FC<IPopup> = (props) => {
  const { children, isVisible = false } = props;

  const classes = ['popup', isVisible ? 'popup_visible' : ''].join(' ');

  return (
    <div className={classes}>
      <div className="popup__modal">{children}</div>
    </div>
  );
};

export { Popup };
