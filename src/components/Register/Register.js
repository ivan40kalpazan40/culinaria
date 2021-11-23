import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from 'semantic-ui-react';

const Register = () => {
  const submitRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    const user = { username, password, confirmPassword };
    console.log(user);
  };
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src='/register.png' /> New to us? Register
        </Header>
        <Form size='large' method='POST' onSubmit={submitRegister}>
          <Segment stacked>
            <Form.Input
              fluid
              icon='user'
              name='username'
              type='text'
              iconPosition='left'
              placeholder='E-mail address'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              name='password'
              type='password'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Confirm Password'
              name='confirmPassword'
              type='password'
            />

            <Button color='teal' fluid size='large'>
              Register
            </Button>
          </Segment>
        </Form>
        <Message>
          Already have an account? <a href='/user/login'>Login</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default Register;
