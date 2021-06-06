import React from 'react';
import { Dropdown, Grid, Header, Icon } from 'semantic-ui-react';

const UserPanel: React.FC = () => {
  const dropdownOptions = () => [
    {
      key: 'user',
      text: (
        <span>
          Logged as <strong>User</strong>
        </span>
      ),
      disabled: true,
    },
    {
      key: 'avatar',
      text: <span>Change Avatar</span>,
      disabled: true,
    },
  ];

  return (
    <Grid style={{ background: '#4c3c4c', margin: 0 }}>
      <Grid.Column>
        <Grid.Row style={{ padding: '1.2em', margin: 0 }}>
          <Header inverted floated='left' as='h2'>
            <Icon name='code' />
            <Header.Content>Slack</Header.Content>
          </Header>
        </Grid.Row>
        <Header style={{ padding: '0.25em' }} as='h4' inverted>
          <Dropdown
            trigger={<span>User</span>}
            options={dropdownOptions()}
          ></Dropdown>
        </Header>
      </Grid.Column>
    </Grid>
  );
};

export default UserPanel;
