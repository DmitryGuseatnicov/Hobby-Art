import React, { FC } from 'react';

import './Popup.scss';

interface IPopup {
  children?: any;
}

const Popup: FC<IPopup> = (props) => {
  const { children } = props;
  return (
    <div className="popup">
      <div className="popup__modal">{children}</div>
    </div>
  );
};

export { Popup };
