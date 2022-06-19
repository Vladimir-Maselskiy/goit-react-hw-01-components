import PropTipes from 'prop-types';
import s from './TransactionHistory.module.css';
import { capitalizeTransactionNane } from './capitalizeTransactionNane';

export default function TransactionHistory(props) {
  const items = props.items;
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          const { type, amount, currency, id } = item;
          return (
            <tr key={id}>
              <td>{capitalizeTransactionNane(type)}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTipes.arrayOf(
    PropTipes.shape({
      type: PropTipes.string.isRequired,
      amount: PropTipes.string.isRequired,
      currency: PropTipes.string.isRequired,
      id: PropTipes.string.isRequired,
    })
  ).isRequired,
};
