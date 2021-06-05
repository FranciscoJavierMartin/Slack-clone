import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CHANNEL_API_ROUTE } from './constants/apiRoutes';

function App() {
  const [channels, setChannels] = useState<any[]>([]);

  useEffect(() => {
    axios.get(CHANNEL_API_ROUTE).then((response) => setChannels(response.data));
  }, []);

  return (
    <div>
      <ul>
        {channels.map((channel) => (
          <li key={channel.id}>{channel.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
