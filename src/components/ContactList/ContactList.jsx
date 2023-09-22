import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from 'redux/filterSlice';

import Contact from 'components/Contact/Contact';
import Section from 'components/Section/Section';
import FormField from 'components/FormField/FormField';
import Input from 'components/Input/Input';

import styles from './ContactList.module.css';

const ContactList = () => {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const onNewFilter = ({ newValue }) => {
    dispatch(setFilter(newValue));
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter(contact => {
      const filterLC = filter.toLowerCase();
      const contactNameLC = contact.name.toLowerCase();

      return contactNameLC.includes(filterLC);
    });
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
        {getFilteredContacts().map(({ id, name, number }) => (
          <Contact
            key={id}
            name={name}
            number={number}
          />
        ))}
      </ul>
    </Section>
  );
};

export default ContactList;
