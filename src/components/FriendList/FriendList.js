import PropTipes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendList(props) {
  return (
    <ul className={s.friendList}>
      {props.friends.map(friend => {
        const { avatar, name, isOnline, id } = friend;
        return (
          <li key={id} className={s.item}>
            <span
              className={s.status}
              style={{ background: isOnline ? 'green' : 'red' }}
            >
              {isOnline ? 'onLine' : 'offLine'}
            </span>
            <img
              className={s.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={s.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTipes.arrayOf(
    PropTipes.shape({
      avatar: PropTipes.string.isRequired,
      name: PropTipes.string.isRequired,
      isOnline: PropTipes.bool.isRequired,
      id: PropTipes.number.isRequired,
    })
  ).isRequired,
};
