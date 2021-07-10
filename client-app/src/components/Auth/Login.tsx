import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Form as FinalForm, Field } from 'react-final-form';
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
import TextInput from '../Common/Form/TextInput';
import { RootStoreContext } from '../../stores/rootStore';
import { IUserFormValues } from '../../models/users';
import { FORM_ERROR } from 'final-form';
import { combineValidators, isRequired } from 'revalidate';

const Login: React.FC = () => {
  const validate = combineValidators({
    email: isRequired('Email'),
    password: isRequired('Password'),
  });
  const {
    userStore: { login },
  } = useContext(RootStoreContext);

  const onSubmit = async (values: IUserFormValues) => {
    return login(values).catch((error) => ({ [FORM_ERROR]: error }));
  };

  return (
    <Grid textAlign='center' verticalAlign='middle' className='app'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h1' icon color='orange' textAlign='center'>
          <Icon name='puzzle piece' color='orange' />
          Login for NetChat
        </Header>
        <FinalForm
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit, submitting, values, form }) => (
            <Form size='large' onSubmit={handleSubmit}>
              <Segment stacked>
                <Field
                  name='email'
                  placeholder='Email address'
                  type='text'
                  icon='mail icon'
                  component={TextInput}
                />
                <Field
                  name='password'
                  placeholder='Password'
                  type='password'
                  icon='lock icon'
                  component={TextInput}
                />
                <Button
                  color='orange'
                  fluid
                  size='large'
                  disabled={submitting}
                  loading={submitting}
                >
                  Login
                </Button>
              </Segment>
            </Form>
          )}
        ></FinalForm>
        <Message>
          Don't have an account? <Link to={REGISTER_PAGE_ROUTE}>Register</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
