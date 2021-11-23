import { auth } from '../../config/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from 'semantic-ui-react';

const Login = ({ logUser }) => {
  const navigate = useNavigate();
  const submitLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(Boolean(localStorage.getItem('auth')));
        localStorage.setItem('auth', email);
        logUser();
        navigate('/');
      })
      .catch((err) => {
        localStorage.removeItem('auth');
        console.log(err.code);
        navigate('/user/login');
      });
  };
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='/logo.png' /> Log-in to your account
        </Header>
        <Form size='large' method='POST' onSubmit={submitLogin}>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='Email'
              type='email'
              name='email'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              name='password'
            />

            <Button color='teal' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='/user/register'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
