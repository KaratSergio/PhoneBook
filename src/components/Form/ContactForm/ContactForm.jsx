import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../../redux/contacts/operations';
import * as selectors from '../../../redux/contacts/selectors';
import { nanoid } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { Loader } from '../../Loader/Loader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faCheck } from '@fortawesome/free-solid-svg-icons';

import { useTranslation } from 'react-i18next';

import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.selectContacts);
  const isLoading = useSelector(selectors.selectLoading);
  const error = useSelector(selectors.selectError);
  const { t } = useTranslation();

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

      Notiflix.Notify.success(t('contactFormSuccessMessage'), {
        position: 'left-top',
      });
    } else {
      Notiflix.Notify.warning(t('contactFormDuplicateMessage'), {
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
          {t('contactFormName')}
        </span>
        <input
          className={css['name-input']}
          type="text"
          name="name"
          placeholder={t('contactFormNamePlaceholder')}
          required
          attern="[A-Za-zА-ЯЁа-яёҐґІіЇїЄє\s]+"
          title={t('contactFormNameTitle')}
        />
      </label>
      <label className={css['tel-label']}>
        <span className={css['label-box']}>
          <FontAwesomeIcon icon={faPhone} className={css['icon-input']} />
          {t('contactFormNumber')}
        </span>
        <input
          className={css['tel-input']}
          type="tel"
          name="number"
          placeholder={t('contactFormNumberPlaceholder')}
          required
          pattern="[0-9\-]+"
          title={t('contactFormNumberTitle')}
        />
      </label>
      <button className={css['button']} type="submit">
        <FontAwesomeIcon icon={faCheck} className={css['iconBtn']} />
        {t('contactFormButton')}
      </button>
    </form>
  );
};
