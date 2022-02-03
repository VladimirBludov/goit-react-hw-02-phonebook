import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import ItemContact from './ItemContact';

export default function Contacts({ contacts, deleteContact }) {
  return (
    <ul className={s.wrapper}>
      {contacts.map(({ id, name, number }, index) => {
        return (
          <ItemContact
            key={id}
            id={id}
            name={name}
            number={number}
            index={index}
            deleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
