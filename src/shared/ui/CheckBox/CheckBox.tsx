/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FC } from 'react';
import './CheckBox.scss';

type CheckBoxSizes = 'small' | 'standard';

interface ICheckBox {
  label: string;
  name: string;
  value?: string;
  size?: CheckBoxSizes;
  isChecked?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: FC<ICheckBox> = (props) => {
  const { label = '', name = '', value = '', size = 'small', isChecked = false, onChange } = props;

  const variantSizes = {
    small: 'checkbox_size-small',
    standard: 'checkbox_size-standard'
  };

  const classes = ['checkbox', variantSizes[size]].join(' ');

  return (
    <div className={classes}>
      <label className="checkbox__label">
        <input
          className="checkbox__input"
          type="checkbox"
          name={name}
          checked={isChecked}
          value={value}
          onChange={onChange}
        />
        <span className="checkbox__text">{label}</span>
      </label>
    </div>
  );
};

export type { ICheckBox };
export { CheckBox };
