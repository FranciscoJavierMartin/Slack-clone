import React from 'react';
import { Header, Icon, Segment } from 'semantic-ui-react';

const MessagesHeader: React.FC = () => {
  return (
    <Segment clearing>
      <Header fluid='true' as='h2' floated='left' style={{ marginBottom: 0 }}>
        <span>
          Channel <Icon name='star outline' color='black' />
        </span>
        <Header.Subheader>2 Users</Header.Subheader>
      </Header>
    </Segment>
  );
};

export default MessagesHeader;
