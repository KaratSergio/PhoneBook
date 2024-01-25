import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../../redux/operations';
import * as selectors from '../../../redux/contacts/selectors';
import { nanoid } from '@reduxjs/toolkit';

import Notiflix from 'notiflix';
import { Loader } from '../../Loader/Loader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faCheck } from '@fortawesome/free-solid-svg-icons';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.selectContacts);
  const isLoading = useSelector(selectors.selectLoading);
  const error = useSelector(selectors.selectError);

  const handleSubmit = e => {
    e.preventDefault();

    const { name, number } = e.target.elements;

    const newName = name.value;
    const isExistingContact = contacts.some(
      ({ name }) => name.toLowerCase() === newName.toLowerCase()
    );

    if (!isExistingContact) {
      const newContact = {
        id: nanoid(),
        name: newName,
        number: number.value,
      };

      dispatch(addContact(newContact));

      Notiflix.Notify.success('Contact added successfully', {
        position: 'left-top',
      });
    } else {
      Notiflix.Notify.warning('Contact with this name already exists', {
        position: 'left-top',
      });
    }

    e.target.reset();
  };

  return (
    <form className={css['form-container']} onSubmit={handleSubmit}>
      {isLoading && <Loader />}
      {error && <div className={css.error}>{error}</div>}
      <label className={css['name-label']}>
        <span className={css['label-box']}>
          <FontAwesomeIcon icon={faUser} className={css['icon-input']} />
          Name
        </span>
        <input
          className={css['name-input']}
          type="text"
          name="name"
          placeholder="Enter name"
          required
          pattern="[A-Za-zА-Яа-яЁё\s]+"
          title="Please enter only letters and spaces"
        />
      </label>
      <label className={css['tel-label']}>
        <span className={css['label-box']}>
          <FontAwesomeIcon icon={faPhone} className={css['icon-input']} />
          Number
        </span>
        <input
          className={css['tel-input']}
          type="tel"
          name="number"
          placeholder="Enter phone number"
          required
          pattern="[0-9\-]+"
          title="Please enter only numbers"
        />
      </label>
      <button className={css['button']} type="submit">
        <FontAwesomeIcon icon={faCheck} className={css['iconBtn']} />
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
