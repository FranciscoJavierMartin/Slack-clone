import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Grid, Header, Icon, Message } from 'semantic-ui-react';
import { REGISTER_PAGE_ROUTE } from '../../constants/routes';
import { RootStoreContext } from '../../stores/rootStore';

const UserPanel: React.FC = () => {
  const {
    userStore: { user, logout, isLoggedIn },
  } = useContext(RootStoreContext);
  const dropdownOptions = () => [
    {
      key: 'user',
      text: (
        <span>
          Logged as <strong>{user?.userName}</strong>
        </span>
      ),
      disabled: true,
    },
    {
      key: 'avatar',
      text: <span>Change Avatar</span>,
      disabled: true,
    },
    {
      key: 'signout',
      text: <span onClick={logout}>Sign Out</span>,
      disabled: false,
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
          {isLoggedIn && user ? (
            <Dropdown
              trigger={<span>{user?.userName}</span>}
              options={dropdownOptions()}
            ></Dropdown>
          ) : (
            <Message>
              Don't has an account?{' '}
              <Link to={REGISTER_PAGE_ROUTE}>Register</Link>
            </Message>
          )}
        </Header>
      </Grid.Column>
    </Grid>
  );
};

export default UserPanel;
