import PropTipes from 'prop-types';
import s from './Profile.module.css';

export default function Profile(props) {
  const { username, tag, location, avatar, stats } = props;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTipes.string.isRequired,
  tag: PropTipes.string.isRequired,
  location: PropTipes.string.isRequired,
  avatar: PropTipes.string.isRequired,
  stats: PropTipes.shape({
    followers: PropTipes.number.isRequired,
    views: PropTipes.number.isRequired,
    likes: PropTipes.number.isRequired,
  }).isRequired,
};
