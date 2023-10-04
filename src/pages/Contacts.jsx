import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Container from '../components/Container';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Notification from '../components/Notification';
import Loader from '../components/Loader';
import MessageBox from '../components/MessageBox';

import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { setError } from 'redux/contacts/slice';
import NavBar from 'components/NavBar';
import { Helmet } from 'react-helmet';

const Contacts = () => {
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
      <Helmet>
        <title>Phonebook - Contacts</title>
      </Helmet>
      <NavBar />
      <Container>
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

export default Contacts;
