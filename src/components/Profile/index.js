import style from './style.module.css';
import profile from '../../images/profile.jpg';
import { BiChevronDown } from 'react-icons/bi';

export const Profile = () => {
  return (
    <div className={style.profile}>
      <img src={profile} alt={'Profile'}/>
      <span className={style.username}>John Doe</span>
      <BiChevronDown />
    </div>
  );
};
