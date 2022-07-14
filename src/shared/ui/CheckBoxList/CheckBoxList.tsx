import React, { FC } from 'react';
import { CheckBox, ICheckBox } from '../CheckBox/CheckBox';
import './CheckBoxList.scss';

interface ICheckBoxList {
  title: string;
  items: Array<ICheckBox>;
  underlined?: boolean;
}

const CheckBoxList: FC<ICheckBoxList> = (props) => {
  const { title = '', items = [], underlined = false } = props;

  const classes = ['checkbox-list', underlined ? 'checkbox-list_underlined' : ''].join(' ');

  return (
    <div className={classes}>
      <h4 className="checkbox-list__title">{title}</h4>
      <ul className="checkbox-list__items">
        {items.map((checkbox) => (
          <li className="checkbox-list__item" key={checkbox.label}>
            <CheckBox
              label={checkbox.label}
              name={checkbox.name}
              value={checkbox.value}
              isChecked={checkbox.isChecked}
              onChange={checkbox.onChange}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export type { ICheckBoxList };
export { CheckBoxList };
