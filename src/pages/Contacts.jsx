import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

import Container from 'components/Container';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Notification from 'components/Notification';
import NavBar from 'components/NavBar';

import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Phonebook - Contacts</title>
      </Helmet>
      <NavBar />
      <Container>
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

export default Contacts;
