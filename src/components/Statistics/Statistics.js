import PropTipes from 'prop-types';
import s from './Statistics.module.css';
import { getRandomColor } from './getRandomColor';

export default function Statistics(props) {
  return (
    <section className={s.statistics}>
      {props.title && <h2 className={s.title}>{props.title}</h2>}

      <ul className={s.statList}>
        {props.stats.map(item => (
          <li
            key={item.id}
            className={s.item}
            style={{ background: getRandomColor() }}
          >
            <span className={s.label}>{item.label}</span>
            <span className={s.percentage}>{item.percentage}%</span>
          </li>
        ))}
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
