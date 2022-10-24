import { useCallback, useEffect, useState } from 'react';
import style from './style.module.css';
import { OverviewCard } from '../OverviewCard';
import { getOverviewItems } from '../../../../Api/Overview';

export const Overview = () => {
  const [items, setItems] = useState([]);

  const fetchOverviewItems = useCallback(async () => {
    setItems(await getOverviewItems());
  }, []);

  useEffect(() => {
    fetchOverviewItems();
  }, [fetchOverviewItems]);

  return (
    <div className={style.overview}>
      {items.length && items.map((item) => (
        <OverviewCard {...item} key={item.id}/>
      ))}
    </div>
  );
};
