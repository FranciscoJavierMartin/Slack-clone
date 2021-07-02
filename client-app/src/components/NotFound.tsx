import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Header, Icon, Segment } from 'semantic-ui-react';
import { LOGIN_PAGE_ROUTE } from '../constants/routes';

const NotFound: React.FC = () => {
  return (
    <Grid textAlign='center' verticalAlign='middle' className='app'>
      <Grid.Column style={{ maxWidth: 800 }}>
        <Segment>
          <Header>
            <Icon name='search' />
            404 - Page Not Found
          </Header>
          <Segment.Inline>
            <Button as={Link} to={LOGIN_PAGE_ROUTE} primary>
              Return to login page
            </Button>
          </Segment.Inline>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default NotFound;
