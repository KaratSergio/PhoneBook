import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/operations';

import css from './App.module.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={css.container}>
      <h1 className={css['main-title']}>Phonebook</h1>
      <ContactForm />
      <h2 className={css['contacts-title']}>Contacts</h2>
      <div className={css['filter-container']}>
        <Filter />
        <ContactList />
      </div>
    </section>
  );
};

export default App;
