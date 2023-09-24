import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import Contact from 'components/Contact';
import Section from 'components/Section';
import FormField from 'components/FormField';
import Input from 'components/Input';

import { setFilter } from 'redux/filterSlice';
import { selectFilteredContacts, selectFilter } from 'redux/selectors';

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  const onNewFilter = ({ newValue }) => dispatch(setFilter(newValue));

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
        {contacts.map(({ id, name, phone }) => (
          <Contact key={id} name={name} phone={phone} id={id} />
        ))}
      </StyledList>
    </Section>
  );
};

export default ContactList;
