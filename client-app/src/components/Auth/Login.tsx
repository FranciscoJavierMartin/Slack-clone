import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  Grid,
  Header,
  Icon,
  Message,
  Segment,
} from 'semantic-ui-react';
import { REGISTER_PAGE_ROUTE } from '../../constants/routes';

const Login: React.FC = () => {
  return (
    <Grid textAlign='center' verticalAlign='middle' className='app'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h1' icon color='orange' textAlign='center'>
          <Icon name='puzzle piece' color='orange' />
          Login for NetChat
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input
              fluid
              name='email'
              icon='mail'
              iconPosition='left'
              placeholder='Email address'
              type='email'
            />
            <Form.Input
              fluid
              name='password'
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Button color='orange' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          Already a user? <Link to={REGISTER_PAGE_ROUTE}>Login</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
