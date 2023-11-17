import style from './Create.module.scss';
import Btn from '../UI/Btn/Btn';
import Input from '../UI/Input/Input';
import { useState } from 'react';

const Create = ({ blogPosts, addPosts, user }) => {
  const [inputValue, setInputValue] = useState('');
  const createPost = (valueText) => {
    if (inputValue) {
      addPosts({ id: blogPosts.length + 1, user: user, body: valueText });
    }
  };
  return (
    <div className={style.createContainer}>
      <div>
        <Input setInputValue={setInputValue} placeholder={'Create post'} />
        <Btn onClick={() => createPost(inputValue)}>Send</Btn>
      </div>
    </div>
  );
};

export default Create;
