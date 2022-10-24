import style from './style.module.css';

export const TopSellerItem = ({
  name,
  price,
  path
}) => {
  return (
    <li className={style.item}>
      <div className={style.details}>
        <img src={`./images/${path}`} alt={path} />
        <span className={style.name}>{name}</span>
      </div>
      <span className={style.price}>{price}</span>
    </li>
  );
};
