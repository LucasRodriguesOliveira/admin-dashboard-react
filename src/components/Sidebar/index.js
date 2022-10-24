import { Logo } from '../Logo';
import { SideMenuItems } from '../SideMenuItems';
import style from './style.module.css';

export const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <Logo />
      <SideMenuItems />
    </div>
  );
};
