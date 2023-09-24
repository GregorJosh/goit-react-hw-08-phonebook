import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Container from './Container';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Notification from './Notification';
import Loader from './Loader';
import MessageBox from './MessageBox';

import { fetchContacts } from 'redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { setError } from 'redux/contactsSlice';

const App = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(setError(null));
      }, 5000);
    }
  }, [dispatch, error]);

  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
      </Container>

      {isLoading && <Loader />}
      {error && <MessageBox type="error" message={error} />}

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
