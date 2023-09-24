import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import { deleteContact } from 'redux/operations';

const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1200px) {
    max-width: 60%;
  }

  > .name {
    width: 30%;
  }

  > .number {
    width: 30%;
    text-align: right;
  }
`;

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onRemove = id => dispatch(deleteContact(id));

  return (
    <StyledListItem>
      <span className="name">{name}</span>
      <span className="number">{number}</span>

      <Button onClick={onRemove} value={id}>
        Remove
      </Button>
    </StyledListItem>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contact;
