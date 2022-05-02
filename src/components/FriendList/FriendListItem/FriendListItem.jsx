import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={s.item}>
    <span className={s.status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}></span>
    <img className={s.avatar} src={avatar} alt={name} width="96px" />
    <p className={s.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  // friend: PropTypes.shape({
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  // id: PropTypes.number.isRequired,
  // }).isRequired,
};

export default FriendListItem;