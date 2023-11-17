import { useState } from 'react';
import Btn from '../Btn/Btn';
import Input from '../Input/Input';
import style from './Modal.module.scss';

const Modal = ({ setUser }) => {
  const [inputValue, setInputValue] = useState('');
  const onClickBtn = () => {
    setUser(inputValue)
  };
  return (
    <>
      <div className={style.background}>
        <div className={style.window}>
          <div>
            <h2>Create a user</h2>
          </div>
          <Input setInputValue={setInputValue}  placeholder={'Enter your name'} />
          <Btn onClick={onClickBtn}>Create</Btn>
        </div>
      </div>
    </>
  );
};

export default Modal;
