/* eslint-disable no-unused-vars */
import React, { FC, useEffect, useRef, useState } from 'react';

import { Icon } from '../Icon/Icon';
import './Input.scss';

interface IInput {
  type: string;
  name?: string;
  placeholder?: string;
  value?: string;
  isFocus?: boolean;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
}

const Input: FC<IInput> = (props) => {
  const { type, name, value, placeholder, onChange, onBlur, isFocus } = props;

  const [inputType, setInputType] = useState(type);
  const inputRef = useRef<HTMLInputElement>(null);

  const focusHandler = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (isFocus) focusHandler();
  }, [isFocus]);

  return (
    <div className="input">
      <input
        className="input__field"
        name={name}
        type={inputType}
        value={value}
        placeholder={placeholder}
        ref={inputRef}
        onChange={onChange}
        onBlur={onBlur}
      />
      {type === 'password' && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <span
          role="button"
          tabIndex={0}
          className="input__icon"
          onClick={() => setInputType(inputType === 'password' ? 'text' : 'password')}>
          <Icon type="eye" />
        </span>
      )}
    </div>
  );
};

export type { IInput };
export { Input };
