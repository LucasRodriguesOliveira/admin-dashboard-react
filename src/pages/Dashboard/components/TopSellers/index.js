import { useCallback, useEffect, useState } from 'react';
import style from './style.module.css';
import { getTopSellers } from '../../../../Api/TopSellers';
import { TopSellerItem } from '../TopSellerItem';

export const TopSellers = () => {
  const [items, setItems] = useState([]);

  const fetchItems = useCallback(async () => {
    setItems(await getTopSellers());
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return (
    <div className={style['top-sales']}>
      <div className={style.title}>Top Selling Products</div>
      <ul>
        {!!items.length &&
          items.map((item) => <TopSellerItem {...item} key={item.id}/>)
        }
      </ul>
    </div>
  );
};
