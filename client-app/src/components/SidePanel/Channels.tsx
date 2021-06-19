import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Icon, Menu } from 'semantic-ui-react';
import { CHANNEL_API_ROUTE } from '../../constants/apiRoutes';
import { IChannel } from '../../models/channels';
import ChannelItem from './ChannelItem';
import ChannelForm from './ChannelForm';

const Channels: React.FC = () => {
  const [channels, setChannels] = useState<IChannel[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

  const toggleModal = (): void => {
    setModalIsVisible((prevState) => !prevState);
  };

  useEffect(() => {
    axios.get<IChannel[]>(CHANNEL_API_ROUTE).then((response) => {
      setChannels(response.data);
    });
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
      <ChannelForm modalIsVisible={modalIsVisible} toggleModal={toggleModal} handleCreateChannel={handleCreateChannel} />
    </>
  );
};

export default Channels;
