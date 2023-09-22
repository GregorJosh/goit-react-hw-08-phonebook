import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contactsSlice';

import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import FormField from 'components/FormField/FormField';

import styles from './ContactForm.module.css';

const ContactForm = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const { name, number } = formData;

  const onChange = ({ name, newValue }) => {
    const newFormData = {
      [name]: newValue,
    };

    setFormData({ ...formData, ...newFormData });
  };

  const onSubmit = event => {
    event.preventDefault();

    if (!searchSimiliarName(name)) {
      dispatch(addContact({ name, number }));
    } else {
      alert(`${name} is already in contacts`);
    }

    setFormData({ name: '', number: '' });
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
    <form className={styles.form} onSubmit={onSubmit}>
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
          name="number"
          type="tel"
          pattern="\+?[0-9]{1,4}?[\-. ]?\(?[0-9]{1,3}?\)?[\-. ]?[0-9]{1,4}[\-. ]?[0-9]{1,4}[\-. ]?[0-9]{1,9}"
          title="Phone number must be minimum 5 digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={onChange}
          value={number}
        />
      </FormField>
      <Button type="submit">Add contact</Button>
    </form>
  );
};

export default ContactForm;
