import PropTypes from 'prop-types';
import s from './FindContacts.module.css';

export default function FindContacts({ filter, onChange }) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
        autoComplete="off"
      />
    </label>
  );
}

FindContacts.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
