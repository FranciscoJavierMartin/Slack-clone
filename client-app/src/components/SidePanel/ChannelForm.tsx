import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Button, Form, Icon, Input, Modal } from 'semantic-ui-react';
import { IChannel } from '../../models/channels';
import ChannelStore from '../../stores/ChannelStore';

interface ChannelFormProps {}

const ChannelForm: React.FC<ChannelFormProps> = () => {
  const { isModalVisible, toggleModal, createChannel } =
    useContext(ChannelStore);

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
    createChannel(channel).finally(() => toggleModal());
  };

  return (
    <Modal basic open={isModalVisible}>
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

export default observer(ChannelForm);
