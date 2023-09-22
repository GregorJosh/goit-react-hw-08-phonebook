import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setContacts } from 'redux/contactsSlice';

import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Notification from './Notification/Notification';

const App = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    const contactsStr = localStorage.getItem('contacts');

    if (contactsStr) {
      dispatch(setContacts(JSON.parse(contactsStr)));
    }
  }, [dispatch]);

  useEffect(() => {
    if (contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } else {
      localStorage.removeItem('contacts');
    }
  }, [contacts]);

  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />
      </Container>

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
