import React from 'react';
import { Grid } from 'semantic-ui-react';
import SidePanel from '../SidePanel/SidePanel';
import ColorPanel from '../ColorPanel/ColorPanel';
import Messages from '../Messages/Messages';
import MetaPanel from '../MetaPanel/MetaPanel';

const Dashboard:React.FC = () => {
  return (
    <Grid columns='equal' className='app'>
      <ColorPanel />
      <SidePanel />
      <Grid.Column style={{ marginLeft: 320 }}>
        <Messages />
      </Grid.Column>
      <Grid.Column width={4}>
        <MetaPanel />
      </Grid.Column>
    </Grid>
  )
}

export default Dashboard
