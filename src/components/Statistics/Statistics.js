import PropTipes from 'prop-types';
import s from './Statistics.module.css';
import { getRandomColor } from '../../helpers/getRandomColor';

export default function Statistics(props) {
  const { title, stats } = props;
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(item => {
          const { id, label, percentage } = item;
          return (
            <li
              key={id}
              className={s.item}
              style={{ background: getRandomColor() }}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
            </li>
          );
        })}
        ;
      </ul>
    </section>
  );
}

Statistics.PropTipes = {
  title: PropTipes.string,
  stats: PropTipes.arrayOf(
    PropTipes.shape({
      id: PropTipes.string.isRequired,
      label: PropTipes.string.isRequired,
      percentage: PropTipes.string.isRequired,
    })
  ).isRequired,
};
