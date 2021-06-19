import React from 'react';
import { Button, Form, Icon, Input, Modal } from 'semantic-ui-react';

interface ChannelFormProps {
  modalIsVisible: boolean;
  toggleModal: () => void;
}

const ChannelForm: React.FC<ChannelFormProps> = ({
  modalIsVisible,
  toggleModal,
}) => {
  return (
    <Modal basic open={modalIsVisible}>
      <Modal.Header>Add Channel</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <Input fluid label='Channel Name' name='channelName' />
          </Form.Field>
          <Form.Field>
            <Input
              fluid
              label='Channel Description'
              name='channelDescription'
            />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='green' inverted onClick={toggleModal}>
          <Icon name='checkmark' /> Add
        </Button>
        <Button basic color='red' inverted onClick={toggleModal}>
          <Icon name='remove' /> Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ChannelForm;
