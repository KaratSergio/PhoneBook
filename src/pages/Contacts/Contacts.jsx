import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Loader } from '../../components/Loader/Loader';
import { useTranslation } from 'react-i18next';

import { fetchContacts } from '../../redux/contacts/operations';
import { selectLoading, selectError } from '../../redux/contacts/selectors';

import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { ContactForm } from '../../components/Form/ContactForm/ContactForm';

import css from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css['container']}>
      <h1 className={css['title']}>{t('phonebookTitle')}</h1>
      <ContactForm />
      <h2 className={css['sub-title']}>{t('contactsSubtitle')}</h2>
      {isLoading && !error && <Loader />}
      <div className={css['box']}>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;
