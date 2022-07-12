import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './LinkCard.scss';

interface ILinkCard {
  title: string;
  price: number;
  img: string;
}

const LinkCard: FC<ILinkCard> = (props) => {
  const { title, price, img } = props;
  return (
    <Link to={`/catalog/${title}`} className="link-card">
      <div className="link-card__info">
        <h4 className="link-card__title">{title}</h4>
        <div className="link-card__price">{`от ${price} руб`}</div>
        <div className="link-card__link">Подробнее</div>
      </div>
      <div className="link-card__photo">
        <img className="link-card__img" src={img} alt="link-card" />
      </div>
    </Link>
  );
};

export { LinkCard };
