import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { Container, Grid, Image, Button, Responsive, Input } from 'semantic-ui-react';

import { fetchProductBySlug } from '../../store/actions';

import PageTitle from '../PageTitle/PageTitle';

class Details extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      isAdded: false,
      quantity: 1
    };
  }

  componentDidMount() {
    const { slug } = this.props.match.params;
    this.props.fetchProductBySlug(slug);
  }

  handleCartButton = () => {
    const { product } = this.props;
    const { quantity, isAdded } = this.state;

    if (!isAdded) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      let currentProduct = cart.find(p => p.slug === product.slug);

      if(currentProduct) {
        currentProduct.quantity += quantity;
        cart = [ ...cart.filter(p => p.slug !== product.slug), currentProduct ];
      }
      else {
        currentProduct = {
          title: product.title,
          slug: product.slug,
          price: product.price,
          quantity: quantity
        };
        cart.push(currentProduct);
      }

      localStorage.setItem('cart', JSON.stringify(cart));

      this.setState({
        isAdded: true
      });
    }
  };

  handleQuantityChange = (_, { value }) => {
    if (value < 1) value = 1;
    console.log(value)
    this.setState({ 
      quantity: parseInt(value),
      isAdded: false
    });
  };

  renderProductDetails = (textAlign, addPriceMargin) => {

    const { isAdded, quantity } = this.state;
    const { title, author, description, price, image } = this.props.product;

    const marginRight = addPriceMargin ? '10px' : '0px';
    const buttonText = isAdded ? 'Added!' : 'Add to cart';

    return (
      <Fragment>
        <Grid.Column>
          <Image src={image} />
        </Grid.Column>
        <Grid.Column textAlign={textAlign}>
          <h3>{title}</h3>
          <h3 style={{ fontSize: '1rem', marginTop: 0 }}>{author}</h3>
          <p>{description}</p>
          <h4 style={{ fontSize: '1.5rem', marginRight: {marginRight} }}>${price}</h4>
          <Input type='number' label='Quantity' value={quantity} onChange={this.handleQuantityChange} /><br />
          <Button primary onClick={this.handleCartButton} style={{ marginTop: '10px' }}>{buttonText}</Button>
        </Grid.Column>
      </Fragment>
    );
  };

  render() {

    const { title } = this.props.product;

    return (
      <main>
        <PageTitle title={title} leftColor='#343144' rightColor='#4ebbd2' />
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

const mapStateToProps = (state) => {
  return {
      product: state.product
  };
};

export default connect(mapStateToProps, {
  fetchProductBySlug
})(withRouter(Details));