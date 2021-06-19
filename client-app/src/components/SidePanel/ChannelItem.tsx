import React from 'react';
import { Menu } from 'semantic-ui-react';
import { IChannel } from '../../models/channels';

interface ChannelItemProps {
  channel: IChannel;
}

const ChannelItem: React.FC<ChannelItemProps> = ({ channel }) => {
  return (
    <Menu.Item
      onClick={() => {}}
      name={channel.name}
      style={{ opacity: 0.7 }}
    >
      # {channel.name}
    </Menu.Item>
  );
};

export default ChannelItem;
