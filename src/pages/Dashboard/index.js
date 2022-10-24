import { Overview } from './components/Overview';
import { SalesContainer } from './components/SalesContainer';
import style from './style.module.css';

export function Dashboard() {
  return (
    <section className={style.dashboard}>
      <Overview />
      <SalesContainer />
    </section>
  );
}
