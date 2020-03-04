import React, { Component, Fragment } from 'react';
import { Container, Grid, Image, Responsive, Form, Message, Header, Button } from 'semantic-ui-react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';

import validatePrice from '../../utils/validatePrice';
import validateImage from '../../utils/validateImage';
import PageTitle from '../PageTitle/PageTitle';
import { fetchProductBySlug } from '../../store/actions/products/productsActions';
import { updateProduct, deleteProduct } from '../../store/actions/products/productsActions';

class EditProductPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputs: {
        productName: '',
        author: '',
        description: '',
        price: '',
        file: null
      },
      errors: {
        productName: null,
        author: null,
        description: null,
        price: null,
        file: null
      },
      imagePreview: null,
      isEdited: false
    }
  }

  async componentDidMount() {
    const { slug } = this.props.match.params;
    await this.props.fetchProductBySlug(slug);

    const { title, author, description, price, image } = this.props.product;
    const { inputs } = this.state;
    inputs.productName = title;
    inputs.author = author;
    inputs.description = description;
    inputs.price = price;
    this.setState({ inputs, imagePreview: image });
  }

  renderProductDetails = (textAlign) => {

    const { inputs, errors, imagePreview, isEdited } = this.state;
    const { productName, author, description, price } = inputs;

    const { slug } = this.props.product;


    const image = imagePreview;

    return (
      !isEdited ? (
        <Fragment>
          <Grid.Column>
            <Image src={image} alt='Image preview'/>
          </Grid.Column>
          <Grid.Column textAlign={textAlign}>
            <Button floated='right' basic color='red' icon='trash' content='Delete product' onClick={this.handleDeleteProductButton(slug)}/>
            <Header as='h3' style={{ marginTop: 0 }}>{productName}</Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input label='Author' name='author' value={author} placeholder='Author' onChange={this.handleInputChange} error={errors.author}/>
              <Form.TextArea label='Description' name='description' value={description} placeholder='Description' onChange={this.handleInputChange} error={errors.description}/>
              <Form.Input label='Price' name='price' value={price} placeholder='Price' onChange={this.handleInputChange} error={errors.price}/>
              <Form.Input type='file' label='Image' onChange={this.handleImageChange} error={errors.file}/>
              <Form.Button content='Submit' color='teal' />
            </Form>
          </Grid.Column>
        </Fragment>
      ) : (
        <Message
          icon='check'
          header='Product was successfully edited!'
        />
      )
    );
  };

  handleDeleteProductButton = (slug) => async () => {
    await this.props.deleteProduct(slug);
    this.props.history.push('/admin-panel/products');
  };

  handleInputChange = (_, { name, value }) => {
    const { inputs } = this.state;
    inputs[name] = value;
    this.setState({ inputs });
  };

  handleImageChange = (e) => {
    const { inputs } = this.state;
    inputs.file = e.target.files[0];
    this.setState({ inputs });

    const isImageValid = validateImage(inputs.file.name);

    if (isImageValid) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.setState({ imagePreview: reader.result });
      });

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  handleSubmit = async () => {
    const { inputs, errors } = this.state;

    let preventSend = false;

    for (const key in inputs) {
      if (inputs[key] === '') {
        preventSend = true;
        errors[key] = 'This field cannot be empty!';
      }
      else {
        errors[key] = null;
      }
    }

    if (errors.price === null) {
      const isPriceValid = validatePrice(inputs.price);
      preventSend = isPriceValid ? preventSend : true;
      errors.price = validatePrice(inputs.price) ? null : 'Invalid input format';
    }

    if (errors.file === null && inputs.file) {
      const isImageValid = validateImage(inputs.file.name);
      preventSend = isImageValid ? preventSend : true;
      errors.file = isImageValid ? null : 'Invalid image format';
    }

    this.setState({ errors });

    if (!preventSend) {

      const bodyFormData = new FormData();
      const { productName, author, description, price, file } = inputs;

      bodyFormData.set('title', productName);
      bodyFormData.set('author', author);
      bodyFormData.set('description', description);
      bodyFormData.set('price', price);
      if (file) {
        bodyFormData.append('file', file);
      }

      const response = await this.props.updateProduct(bodyFormData);
      if (response === 200) {
        this.setState({ isEdited: true });
      }
    }
  };

  render() {
    return (
      <main>
        <PageTitle title='edit' leftColor='#343144' rightColor='#343144' />
        <Container style={{ marginTop: '20px' }}>
          <Responsive as={Grid} columns={1} {...Responsive.onlyMobile}>
            {this.renderProductDetails('center')}
          </Responsive>
          <Responsive as={Grid} columns={2} {...Responsive.onlyTablet}>
            {this.renderProductDetails('left')}
          </Responsive>
          <Responsive as={Grid} columns={2} {...Responsive.onlyComputer}>
            {this.renderProductDetails('left')}
          </Responsive>
        </Container>
      </main>
    );
  }
};

const mapStateToProps = (state) => {
  return {
      product: state.product
  };
};

export default connect(mapStateToProps, {
  fetchProductBySlug,
  updateProduct,
  deleteProduct
})(withRouter(EditProductPage));