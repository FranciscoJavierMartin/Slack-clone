import React, { useEffect, useState } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { IChannel } from '../../models/channels';
import ChannelItem from './ChannelItem';
import ChannelForm from './ChannelForm';
import agent from '../../api/agent';

const Channels: React.FC = () => {
  const [channels, setChannels] = useState<IChannel[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

  const toggleModal = (): void => {
    setModalIsVisible((prevState) => !prevState);
  };

  useEffect(() => {
    agent.Channels.list().then((response) => setChannels(response));
  }, []);

  const handleCreateChannel = (channel: IChannel) => {
    setChannels((prevState) => [...prevState, channel]);
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
        {channels.map((channel) => (
          <ChannelItem key={channel.id} channel={channel} />
        ))}
      </Menu.Menu>
      <ChannelForm
        modalIsVisible={modalIsVisible}
        toggleModal={toggleModal}
        handleCreateChannel={handleCreateChannel}
      />
    </>
  );
};

export default Channels;
