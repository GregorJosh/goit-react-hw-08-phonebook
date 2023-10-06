import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';

import Container from 'components/Container/Container';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Notification from 'components/Notification/Notification';
import NavBar from 'components/NavBar/NavBar';

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
