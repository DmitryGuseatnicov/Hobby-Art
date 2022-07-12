import React, { FC, useState } from 'react';

import { Icon, Input } from 'shared/ui';
import './ProfileInput.scss';

interface IProfileInput {
  value: string;
  label: string;
  name: string;
  type: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfileInput: FC<IProfileInput> = (props) => {
  const { value, type, label, name, onChange } = props;

  const [isEdit, setIsEdit] = useState(false);

  const widgetHandler = () => {
    setIsEdit(!isEdit);
  };

  const classes = {
    widget: `profile-input__data-widget ${isEdit ? 'profile-input__data-widget_hidden' : ''}`,
    input: `profile-input__input ${isEdit ? 'profile-input__input_visible' : ''}`
  };

  return (
    <div className="profile-input">
      <div className={classes.widget}>
        <div className="profile-input__data-value">
          <div className="profile-input__data-label">{label}</div>
          <div className="profile-input__data-text">{`${
            type === 'password' ? '********' : value
          }`}</div>
        </div>
        <button className="profile-input__button" type="button" onClick={widgetHandler}>
          <div className="profile-input__button-inner">
            <span className="profile-input__button-icon">
              <Icon type="pen" />
            </span>
            <span className="profile-input__button-text">Изменить</span>
          </div>
        </button>
      </div>
      <div className={classes.input}>
        <Input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          isFocus={isEdit}
          onBlur={widgetHandler}
        />
      </div>
    </div>
  );
};

export { ProfileInput };
