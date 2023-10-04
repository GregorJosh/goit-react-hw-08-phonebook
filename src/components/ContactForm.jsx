import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Button from 'components/Button';
import Input from 'components/Input';
import FormField from 'components/FormField';

import { setError } from 'redux/contacts/slice';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

const StyledForm = styled.form`
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  border: 2px solid rgba(128, 128, 128, 0.221);
`;

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  const { name, phone } = formData;

  const onChange = ({ name, newValue }) => {
    const newFormData = {
      [name]: newValue,
    };

    setFormData({ ...formData, ...newFormData });
  };

  const onSubmit = event => {
    event.preventDefault();

    if (!searchSimiliarName(name)) {
      dispatch(addContact({ name, number: phone }));
    } else {
      dispatch(setError(`${name} is already in contacts`));
    }

    setFormData({ name: '', phone: '' });
  };

  const searchSimiliarName = name => {
    let result = false;

    contacts.forEach(contact => {
      if (contact.name.toLowerCase() === name.toLowerCase()) {
        result = true;
      }
    });

    return result;
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <FormField label="Name" vertical>
        <Input
          name="name"
          pattern="^[a-ząćęłńóśźżA-ZĄĆĘŁŃÓŚŹŻа-яА-Я]+(([a-zA-Zа-яА-Я \-'])?[a-ząćęłńóśźżA-ZĄĆĘŁŃÓŚŹŻа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={onChange}
          value={name}
        />
      </FormField>

      <FormField label="Number" vertical>
        <Input
          name="phone"
          type="tel"
          pattern="\+?[0-9]{1,4}?[\-. ]?\(?[0-9]{1,3}?\)?[\-. ]?[0-9]{1,4}[\-. ]?[0-9]{1,4}[\-. ]?[0-9]{1,9}"
          title="Phone number must be minimum 5 digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={onChange}
          value={phone}
        />
      </FormField>
      <Button type="submit">Add contact</Button>
    </StyledForm>
  );
};

export default ContactForm;
