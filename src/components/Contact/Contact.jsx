import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Button from 'components/Button/Button';
import { StyledListItem } from './Contact.styled';
import { deleteContact } from 'redux/contacts/operations';

const Contact = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  const onRemove = id => dispatch(deleteContact(id));

  return (
    <StyledListItem>
      <span className="name">{name}</span>
      <span className="phone">{phone}</span>

      <Button onClick={onRemove} value={id}>
        Remove
      </Button>
    </StyledListItem>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;
