import { RecentSales } from '../RecentSales';
import { TopSellers } from '../TopSellers';
import style from './style.module.css';

export const SalesContainer = () => {
  return (
    <div className={style['sales-container']}>
      <RecentSales />
      <TopSellers />
    </div>
  );
};
