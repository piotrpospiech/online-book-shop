import React, { Component, Fragment } from 'react';
import { Container, Grid, Image, Responsive, Form } from 'semantic-ui-react';

import PageTitle from '../PageTitle/PageTitle';

class CreateProductPage extends Component {

  renderProductDetails = (textAlign, addPriceMargin) => {

    const marginRight = addPriceMargin ? '10px' : '0px';

    return (
      <Fragment>
        <Grid.Column>
          <Image src='../../../public/image-wireframe.png' alt='Image wireframe'/>
        </Grid.Column>
        <Grid.Column textAlign={textAlign}>
          <Form>
            <Form.Input label='Product name' placeholder='Product name' />
            <Form.Input label='Author' placeholder='Author' />
            <Form.TextArea label='Description' placeholder='Description' />
            <Form.Input label='Price' placeholder='Price' />
            <Form.Input type='file' label='Image' />
            <Form.Button content='Submit' color='teal' />
          </Form>
        </Grid.Column>
      </Fragment>
    );
  };

  render() {

    return (
      <main>
        <PageTitle title='new product' leftColor='#343144' rightColor='#343144' />
        <Container style={{ marginTop: '20px' }}>
          <Responsive as={Grid} columns={1} {...Responsive.onlyMobile}>
            {this.renderProductDetails('center', true)}
          </Responsive>
          <Responsive as={Grid} columns={2} {...Responsive.onlyTablet}>
            {this.renderProductDetails('left', false)}
          </Responsive>
          <Responsive as={Grid} columns={2} {...Responsive.onlyComputer}>
            {this.renderProductDetails('left', false)}
          </Responsive>
        </Container>
      </main>
    );
  }
};

export default CreateProductPage;