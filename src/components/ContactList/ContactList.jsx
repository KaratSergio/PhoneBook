import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import * as selectors from '../../redux/contacts/selectors';
import { Loader } from '../Loader/Loader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTrash } from '@fortawesome/free-solid-svg-icons';

import css from './ContactList.module.css';

const ContactInfo = ({ name, number }) => (
  <div className={css.contactInfo}>
    <div className={css.nameContainer}>
      <FontAwesomeIcon className={css.nameIcon} icon={faUser} />
      <span className={css.name}>{name}:</span>
    </div>
    <span>{number}</span>
  </div>
);

const ContactListItem = ({ contact, onDelete }) => (
  <li key={contact.id} className={css.item}>
    <ContactInfo name={contact.name} number={contact.number} />
    <button className={css.deleteButton} onClick={() => onDelete(contact)}>
      <FontAwesomeIcon icon={faTrash} />
      Delete
    </button>
  </li>
);

  export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectors.selectFilteredContacts);
  const isLoading = useSelector(selectors.selectLoading);
  const error = useSelector(selectors.selectError);

  const handleDelete = contact => dispatch(deleteContact(contact.id));

  return (
    <div>
      {isLoading && <Loader />}
      {error && <div className={css.error}>{error}</div>}

      <ul className={css.list}>
        {filteredContacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
