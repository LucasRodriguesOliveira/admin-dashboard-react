import style from './style.module.css';

export const SideMenuItem = ({
  icon,
  text
}) => (
  <div className={style['menu-item']}>
    <button>
      {icon}
      <span className={style['menu-item-text']}>{text}</span>
    </button>
  </div>
);
