import style from './style.module.css';
import { BiUpArrowAlt, BiDownArrowAlt, BiQuestionMark } from 'react-icons/bi';
import { useCallback } from 'react';

export const OverviewCard = ({
  title,
  value,
  indicator,
  color
}) => {
  const formatValue = useCallback(() => {
    return value.toLocaleString('en');
  }, [value]);

  return (
    <div className={`${style.card} ${style[color.toLowerCase()]}`}>
      <div className={style.title}>{title}</div>
        <div className={style.value}>{formatValue()}</div>
        <div className={style.indicator}>
          {indicator?.growDirection === 'up' && <BiUpArrowAlt />}
          {indicator?.growDirection === 'down' && <BiDownArrowAlt />}
          {!indicator.growDirection && <BiQuestionMark />}
          <span className={style['indicator-description']}>{indicator.description}</span>
        </div>
    </div>
  );
}
