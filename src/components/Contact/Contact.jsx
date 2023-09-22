import { useDispatch } from 'react-redux';

import { removeContact } from 'redux/contactsSlice';
import Button from 'components/Button/Button';

import styles from './Contact.module.css';

const Contact = ({ name, number }) => {
  const dispatch = useDispatch();

  const { contact, name: nameRule, number: numberRule } = styles;

  const onRemove = name => {
    dispatch(removeContact(name));
  };

  return (
    <li className={contact}>
      <span className={nameRule}>{name}</span>
      <span className={numberRule}>{number}</span>

      <Button onClick={onRemove} value={name}>
        Remove
      </Button>
    </li>
  );
};

export default Contact;
