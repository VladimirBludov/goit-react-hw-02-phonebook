import PropTypes from 'prop-types';
import s from './ItemContact.module.css';

export default function ItemContact({
  id,
  name,
  number,
  index,
  deleteContact,
}) {
  return (
    <li className={s.item}>
      <span className={s.index}>{`${index + 1}.`}</span>
      <span className={s.name}>{name}: </span>
      <span>{number}</span>
      <button className={s.button} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
}

ItemContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
