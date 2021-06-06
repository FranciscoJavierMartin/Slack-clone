import React, { useState } from 'react';
import { Button, Form, Icon, Input, Menu, Modal } from 'semantic-ui-react';

const Channels: React.FC = () => {
  const [channels, setChannels] = useState<any[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

  const toggleModal = () => {
    setModalIsVisible((prevState) => !prevState);
  };

  return (
    <>
      <Menu.Menu style={{ paddingBottom: '2em' }}>
        <Menu.Item>
          <span>
            <Icon name='exchange' /> CHANNELS
          </span>{' '}
          ({channels.length}){' '}
          <Icon
            name='add'
            onClick={toggleModal}
            style={{ cursor: 'pointer' }}
          />
        </Menu.Item>
      </Menu.Menu>
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
    </>
  );
};

export default Channels;
