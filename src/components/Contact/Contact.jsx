import { useDispatch } from 'react-redux';

import Button from 'components/Button/Button';

import { deleteContact } from 'redux/operations';

import styles from './Contact.module.css';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const { contact, name: nameRule, number: numberRule } = styles;

  const onRemove = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={contact}>
      <span className={nameRule}>{name}</span>
      <span className={numberRule}>{number}</span>

      <Button onClick={onRemove} value={id}>
        Remove
      </Button>
    </li>
  );
};

export default Contact;
