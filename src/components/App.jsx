import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Notification from './Notification/Notification';
import Loader from './Loader/Loader';

import { fetchContacts } from 'redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

const App = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
      </Container>
      {isLoading && <Loader />}
      {error && <div>{error}</div>}
      {contacts.length ? (
        <ContactList />
      ) : (
        <Container>
          <Notification message="There is no contacts on phonebook" />
        </Container>
      )}
    </>
  );
};

export default App;
