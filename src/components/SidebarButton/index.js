import { BiMenu } from 'react-icons/bi';
import style from './style.module.css';

export const SidebarButton = () => (
  <div className={style.button}>
    <BiMenu className={style.icon} />
    <span className={style.text}>Dashboard</span>
  </div>
);
