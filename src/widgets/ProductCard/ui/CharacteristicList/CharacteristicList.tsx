import React, { FC } from 'react';

import { Title } from 'shared/ui';
import './CharacteristicList.scss';

interface ICharacteristicList {
  weight?: string;
  length?: string;
  composition?: string;
  country?: string;
  colorsLength?: string;
}

const CharacteristicList: FC<ICharacteristicList> = (props) => {
  const { weight, length, composition, country, colorsLength } = props;
  return (
    <div className="characteristic-list">
      {weight && (
        <div className="characteristic-list__item">
          <div className="characteristic-list__title">
            <Title level={5} size="small">
              Длина
            </Title>
          </div>
          <div className="characteristic-list__value">{weight} г</div>
        </div>
      )}
      {length && (
        <div className="characteristic-list__item">
          <div className="characteristic-list__title">
            <Title level={5} size="small">
              Толщина
            </Title>
          </div>
          <div className="characteristic-list__value">{length} мм</div>
        </div>
      )}
      {composition && (
        <div className="characteristic-list__item">
          <div className="characteristic-list__title">
            <Title level={5} size="small">
              Состав
            </Title>
          </div>
          <div className="characteristic-list__value">{composition}</div>
        </div>
      )}
      {country && (
        <div className="characteristic-list__item">
          <div className="characteristic-list__title">
            <Title level={5} size="small">
              Производитель
            </Title>
          </div>
          <div className="characteristic-list__value">{country}</div>
        </div>
      )}
      {colorsLength && (
        <div className="characteristic-list__item">
          <div className="characteristic-list__title">
            <Title level={5} size="small">
              Кол-во цветов
            </Title>
          </div>
          <div className="characteristic-list__value">{colorsLength}</div>
        </div>
      )}
    </div>
  );
};

export { CharacteristicList };
