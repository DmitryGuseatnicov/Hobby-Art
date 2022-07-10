import React, { FC } from 'react';

import { Button } from 'shared/ui';
import { textSlice } from 'shared/libs';
import './BannerSlide.scss';

interface IBannerSlide {
  id: string;
  img: string;
  title: string;
  text: string;
  buttonText: string;
}

const BannerSlide: FC<IBannerSlide> = (props) => {
  const { id, img, title, text, buttonText } = props;

  return (
    <div className="banner-slide">
      <div className="banner-slide__photo">
        <img className="banner-slide__img" src={img} alt={title} />
      </div>
      <div className="banner-slide__info">
        <h3 className="banner-slide__title">{title}</h3>
        <p className="banner-slide__text">{textSlice(text, 300)}</p>
        <div className="banner-slide__button-link">
          <Button modification="pink" height="standard" link={`product/${id}`}>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export type { IBannerSlide };
export { BannerSlide };
