import { PropTypes } from 'prop-types';

import Container from 'components/Container';
import Notification from 'components/Notification';

const MessageBox = ({ type = 'info', message }) => {
  return (
    <section>
      <Container>
        <Notification message={message} />
      </Container>
    </section>
  );
};

MessageBox.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default MessageBox;
