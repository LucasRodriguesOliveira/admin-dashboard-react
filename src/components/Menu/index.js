import { Profile } from '../Profile';
import { SearchBox } from '../SearchBox';
import { SidebarButton } from '../SidebarButton';
import style from './style.module.css';

export const Menu = () => {
  return (
    <nav className={style.menu}>
      <SidebarButton />
      <SearchBox />
      <Profile />
    </nav>
  );
};
