import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Loader } from '../../components/Loader/Loader';

import { fetchContacts } from '../../redux/contacts/operations';
import { selectLoading, selectError } from '../../redux/contacts/selectors';

import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { ContactForm } from '../../components/Form/ContactForm/ContactForm';

import css from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css['container']}>
      <h1 className={css['title']}>Phonebook</h1>
      <ContactForm />
      <h2 className={css['sub-title']}>Contacts</h2>
      {isLoading && !error && (
        <Loader />
      )}
      <div className={css['box']}>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;
