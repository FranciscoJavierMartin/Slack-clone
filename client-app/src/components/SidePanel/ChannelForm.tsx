import React, { useState } from 'react';
import { Button, Form, Icon, Input, Modal } from 'semantic-ui-react';
import { IChannel } from '../../models/channels';

interface ChannelFormProps {
  modalIsVisible: boolean;
  toggleModal: () => void;
  handleCreateChannel: (channel: IChannel) => void;
}

const ChannelForm: React.FC<ChannelFormProps> = ({
  modalIsVisible,
  toggleModal,
  handleCreateChannel,
}) => {
  const [channel, setChannel] = useState<IChannel>({
    name: '',
    description: '',
    id: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChannel((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    handleCreateChannel(channel);
  };

  return (
    <Modal basic open={modalIsVisible}>
      <Modal.Header>Add Channel</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <Input
              fluid
              label='Channel Name'
              name='name'
              onChange={handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <Input
              fluid
              label='Channel Description'
              name='description'
              onChange={handleInputChange}
            />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='green' inverted onClick={handleSubmit}>
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
