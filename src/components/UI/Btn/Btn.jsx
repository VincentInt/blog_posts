import style from './Btn.module.scss'

const Btn = ({children, onClick}) => {
  return (
    <>
    <button onClick={onClick} className={style.Btn}>{children}</button>
    </>
  );
};

export default Btn;