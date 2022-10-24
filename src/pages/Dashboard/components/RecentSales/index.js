import { useCallback, useEffect, useState } from 'react';
import { getRecentSales } from '../../../../Api/RecentSales';
import { RecentSaleItem } from '../RecentSaleItem';
import style from './style.module.css';

export const RecentSales = () => {
  const [sales, setSales] = useState([]);

  const fetchRecentSalesData = useCallback(async () => {
    setSales(await getRecentSales());
  }, []);

  useEffect(() => {
    fetchRecentSalesData()
  }, [fetchRecentSalesData]);

  return (
    <div className={style['recent-sales']}>
      <div className={style.title}>Recent Sales</div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Costumer</th>
            <th>Sale Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {!!sales.length &&
            sales.map((sale) => (
              <RecentSaleItem {...sale} key={sale.id}/>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};
