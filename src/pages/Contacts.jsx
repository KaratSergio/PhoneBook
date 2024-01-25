import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Grid } from 'react-loader-spinner';

const { useEffect } = require('react');
const { useDispatch, useSelector } = require('react-redux');

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsloading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Your phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && (
        <Grid
          visible={true}
          height="80"
          width="80"
          color="gray"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass="grid-wrapper"
        />
      )}
      <ContactList />
    </div>
  );
};

export default Contacts;
