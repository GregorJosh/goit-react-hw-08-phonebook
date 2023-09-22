import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from 'redux/filterSlice';

import Contact from 'components/Contact/Contact';
import Section from 'components/Section/Section';
import FormField from 'components/FormField/FormField';
import Input from 'components/Input/Input';

import { selectFilteredContacts, selectFilter } from 'redux/selectors';

import styles from './ContactList.module.css';

const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  const onNewFilter = ({ newValue }) => {
    dispatch(setFilter(newValue));
  };

  return (
    <Section title="Contacts">
      <FormField label="Find contacts by name" vertical>
        <Input
          name="filter"
          pattern="^[a-ząćęłńóśźżA-ZĄĆĘŁŃÓŚŹŻа-яА-Я]+(([a-zA-Zа-яА-Я \-'])?[a-ząćęłńóśźżA-ZĄĆĘŁŃÓŚŹŻа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={onNewFilter}
          placeholder="contact name"
          value={filter}
        />
      </FormField>

      <ul className={styles.contacts}>
        {contacts.map(({ id, name, number }) => (
          <Contact key={id} name={name} number={number} id={id} />
        ))}
      </ul>
    </Section>
  );
};

export default ContactList;
