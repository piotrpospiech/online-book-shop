import React, { Component } from 'react';
import { Form, Container, Header, Button } from 'semantic-ui-react';

import validateEmail from '../../utils/validateEmail';

import PageTitle from '../PageTitle/PageTitle';

class CheckoutPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      errors: {
        firstName: null,
        lastName: null,
        address: null,
        postcode: null,
        city: null,
        country: null,
        email: null,
      },
      inputs: {
        firstName: '',
        lastName: '',
        address: '',
        postcode: '',
        city: '',
        country: '',
        email: '',
      }
    };
  }

  handleInputChange = (_, { name, value }) => {
    const { inputs } = this.state;
    inputs[name] = value;
    this.setState({ inputs });
  };

  handleSendButton = () => {
    const { errors, inputs } = this.state;

    let preventSend = false;
    for (const key in inputs) {
      if (inputs[key] === '') {
        preventSend = true;
        errors[key] = 'This field cannot be empty!';
      }
      else {
        if (key === 'email') {
          const isEmail = validateEmail(inputs[key]);
          errors[key] = isEmail ? null : 'Your email address is invalid!';
          continue;
        }

        errors[key] = null;
      }
    }

    this.setState({ errors });

    if (!preventSend) {
      // Send
    }
  };

  render() {

    const { errors, inputs } = this.state;

    return (
      <main>
        <PageTitle title='checkout' leftColor='#343144' rightColor='#343144' />

        <Container style={{ marginTop: 40 }}>
          <Header as='h2' textAlign='center' style={{ backgroundColor: 'teal', color: '#fff', padding: 5 }}>Billing details</Header>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input label='First name*' name='firstName' placeholder='First name' error={errors.firstName} value={inputs.firstName} onChange={this.handleInputChange}/>
              <Form.Input label='Last name*' name='lastName' placeholder='Last name' error={errors.lastName} value={inputs.lastName} onChange={this.handleInputChange}/>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input label='Address*' name='address' placeholder='Address' error={errors.address} value={inputs.address} onChange={this.handleInputChange}/>
              <Form.Input label='Apartment' placeholder='Apartment (optional)'/>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input label='ZIP/Postal code*' name='postcode' placeholder='ZIP/Postal code' error={errors.postcode} value={inputs.postcode} onChange={this.handleInputChange}/>
              <Form.Input label='City*' name='city' placeholder='City' error={errors.city} value={inputs.city} onChange={this.handleInputChange}/>
              <Form.Input label='Country*' name='country' placeholder='Country' error={errors.country} value={inputs.country} onChange={this.handleInputChange}/>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input label='Phone' placeholder='Phone (optional)'/>
              <Form.Input label='Email*' name='email' placeholder='Email' error={errors.email} value={inputs.email} onChange={this.handleInputChange}/>
            </Form.Group>
          </Form>
          <Button floated='right' color='teal' icon='checkmark' content='Send' onClick={this.handleSendButton} style={{ marginBottom: 40 }}/>
        </Container>
      </main>
    );
  }
};

export default CheckoutPage;