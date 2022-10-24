import style from './style.module.css';
import { items } from './items';
import { SideMenuItem } from '../SideMenuItem';

export const SideMenuItems = () => {
  return (
    <nav className={style.menu}>
      {items.length &&
        items.map((item, index) => <SideMenuItem {...item} key={index}/>)
      }
    </nav>
  );
};
