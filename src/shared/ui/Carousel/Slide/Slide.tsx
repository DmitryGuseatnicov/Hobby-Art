import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './Slide.scss';

interface ISlide {
  link: string;
  img: string;
  name: string;
}

const Slide: FC<ISlide> = (props) => {
  const { link, img, name } = props;

  return (
    <div className="carousel-slide">
      <img className="carousel-slide__img" src={img} alt="" />
      <div className="carousel-slide__background">
        <Link className="carousel-slide__link" to={link}>
          {name}
        </Link>
      </div>
    </div>
  );
};

export type { ISlide };
export { Slide };
