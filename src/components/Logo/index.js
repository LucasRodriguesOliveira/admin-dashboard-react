import style from './style.module.css';
import { BiSpreadsheet } from 'react-icons/bi';

export const Logo = () => (
  <div className={style.logo}>
    <BiSpreadsheet />
    <span className={style['logo-name']}>Whisper</span>
  </div>
);
