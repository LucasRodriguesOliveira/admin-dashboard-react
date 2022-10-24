import { useCallback } from 'react';
import style from './style.module.css';

export const RecentSaleItem = ({
  date,
  costumer,
  saleStatus,
  total
}) => {
  const formatDate = useCallback(() => {
    return new Date(date).toLocaleDateString('en', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }, [date]);

  const formatTotal = useCallback(() => {
    return total.toLocaleString('en');
  }, [total]);

  return (
    <tr className={style.item}>
      <td>{formatDate()}</td>
      <td>{costumer}</td>
      <td
        className={`${style.saleStatus} ${style[saleStatus?.toLowerCase()]}`}
        >{saleStatus}
      </td>
      <td className={style.total}><span>$</span>{formatTotal()}</td>
    </tr>
  );
};
