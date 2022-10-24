import style from './style.module.css';
import { BiSearchAlt } from 'react-icons/bi';

export const SearchBox = () => {
  return (
    <div className={style['search-box']}>
      <input type={'text'} placeholder={'Search...'} />
      <BiSearchAlt />
    </div>
  );
};
