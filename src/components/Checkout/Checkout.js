import React, { Component } from 'react';
import { Form, Container, Header } from 'semantic-ui-react';

import PageTitle from '../PageTitle/PageTitle';

class CheckoutPage extends Component {

  render() {

    return (
      <main>
        <PageTitle title='checkout' leftColor='#343144' rightColor='#343144' />

        <Container style={{ marginTop: 40 }}>
          <Header as='h2' textAlign='center' style={{ backgroundColor: 'teal', color: '#fff', padding: 5 }}>Billing details</Header>
          <Form>
            <Form.Group widths='equal'>
              <Form.Input label='First name*' placeholder='First name'></Form.Input>
              <Form.Input label='Last name*' placeholder='Last name'></Form.Input>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input label='Address*' placeholder='Address'></Form.Input>
              <Form.Input label='Apartment' placeholder='Apartment (optional)'></Form.Input>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input label='ZIP/Postal code*' placeholder='ZIP/Postal code'></Form.Input>
              <Form.Input label='City*' placeholder='City'></Form.Input>
              <Form.Input label='Country*' placeholder='Country'></Form.Input>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input label='Phone' placeholder='Phone (optional)'></Form.Input>
              <Form.Input label='Email*' placeholder='Email'></Form.Input>
            </Form.Group>
          </Form>
        </Container>
      </main>
    );
  }
};

export default CheckoutPage;