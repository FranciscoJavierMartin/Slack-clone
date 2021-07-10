import React, { useEffect, useContext } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import ChannelItem from './ChannelItem';
import ChannelForm from './ChannelForm';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../../stores/rootStore';

const Channels: React.FC = () => {
  const {
    channelStore: { loadChannels, channels, toggleModal },
  } = useContext(RootStoreContext);

  useEffect(() => {
    loadChannels();
  }, [loadChannels]);

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
      <ChannelForm />
    </>
  );
};

export default observer(Channels);
