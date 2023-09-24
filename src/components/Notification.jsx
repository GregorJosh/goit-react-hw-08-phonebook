import PropTypes from 'prop-types';
import styled from 'styled-components';

const Info = styled.div`
  color: #613d03;
`;

const Error = styled.div`
  color: red;
`;

const Notification = ({ type = 'info', message }) => {
  return type === 'info' ? <Info>{message}</Info> : <Error>{message}</Error>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Notification;
