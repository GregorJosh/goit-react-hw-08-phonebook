import PropTypes from 'prop-types';

import { Info, Error } from './Notification.styled';

const Notification = ({ type = 'info', message }) => {
  return type === 'info' ? <Info>{message}</Info> : <Error>{message}</Error>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Notification;
