import style from './Input.module.scss';
import { useState } from 'react';

const Input = ({ setInputValue, placeholder }) => {
  const [onChange, setOnChange] = useState('');

  const onChangeFunc = (value) => {
    setOnChange(value);
    setInputValue(onChange);
  };
  return (
    <input
      placeholder={placeholder}
      className={style.Input}
      onChange={(e) => onChangeFunc(e.target.value)}
      value={onChange}
      type="text"
    />
  );
};

export default Input;
