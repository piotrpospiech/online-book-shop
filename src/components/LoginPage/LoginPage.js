import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Header, Form, Segment, Button, Message } from 'semantic-ui-react';

import { loginUser } from '../../store/actions/auth/authActions';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {},
      hideMessage: true
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async () => {
    const { username, password } = this.state;
    const errors = this.validateInputs(username, password);
    this.setState({ errors });
    if (!errors.username && !errors.password) {
      const loginData = { username, password }

      try {
        await this.props.loginUser(loginData);

        if (this.props.auth.message) {
          this.setState({ hideMessage: false });
        }
      }
      catch (err) {
        console.log(err);
      }
    }
  };

  validateInputs = (username, password) => {
    let errors = {};
    if (username === '') errors.username = 'This field is required';
    if (password === '') errors.password = 'This field is required';
    return errors;
  };

  render() {

    const { username, password, errors, hideMessage } = this.state;

    return (
      <Grid textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Log-in to your account
          </Header>
          <Message negative hidden={hideMessage}>
            <Message.Header>Wrong username or password</Message.Header>
          </Message>
          <Form size='large'>
            <Segment stacked>
              <Form.Input 
                fluid 
                icon='user' 
                iconPosition='left' 
                name='username'
                placeholder='Username' 
                error={errors.username}
                value={username}
                onChange={this.onChange}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                name='password'
                placeholder='Password'
                type='password'
                error={errors.password}
                value={password}
                onChange={this.onChange}
              />
  
              <Button onClick={this.onSubmit} color='teal' fluid size='large'>Login</Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
};

const mapStateToProps = (state) => {
  return {
      auth: state.auth
  };
};

export default connect(mapStateToProps, {
  loginUser
})(Login);