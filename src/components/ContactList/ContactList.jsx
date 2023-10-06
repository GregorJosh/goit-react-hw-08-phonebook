import { useState } from 'react';
import { useSelector } from 'react-redux';

import Contact from 'components/Contact/Contact';
import Section from 'components/Section/Section';
import FormField from 'components/FormField/FormField';
import Input from 'components/Input/Input';

import { StyledList } from './ContactList.styled';

import { selectContacts } from 'redux/contacts/selectors';

const ContactList = () => {
  const [filter, setFilter] = useState('');
  const contacts = useSelector(selectContacts);
  const onNewFilter = ({ newValue }) => setFilter(newValue);

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

      <StyledList>
        {getFilteredContacts().map(({ id, name, number }) => (
          <Contact key={id} name={name} phone={number} id={id} />
        ))}
      </StyledList>
    </Section>
  );
};

export default ContactList;
