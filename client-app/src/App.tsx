import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Header, List } from 'semantic-ui-react';
import { CHANNEL_API_ROUTE } from './constants/apiRoutes';

function App() {
  const [channels, setChannels] = useState<any[]>([]);

  useEffect(() => {
    axios.get(CHANNEL_API_ROUTE).then((response) => setChannels(response.data));
  }, []);

  return (
    <div>
      <Header as='h2' icon>
        <Header.Subheader>Slack</Header.Subheader>
      </Header>
      <List>
        {channels.map((channel) => (
          <List.Item key={channel.id}>{channel.name}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
