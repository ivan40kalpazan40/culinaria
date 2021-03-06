import { Button, Checkbox, Form, Container } from 'semantic-ui-react';
const Create = () => {
  return (
    <Container>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </Container>
  );
};

export default Create;
