import React, { Component } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { Container, Grid, Image, Button } from 'semantic-ui-react';

import { fetchProductBySlug, addToCart } from '../../store/actions';

import PageTitle from '../PageTitle';

class Details extends Component {

  constructor(props) {
    super(props);
    this.state = { isAdded: false };
  }

  componentDidMount() {
    const { slug } = this.props.match.params;
    this.props.fetchProductBySlug(slug);
  }

  handleCartButton = () => {
    const { product } = this.props;

    this.props.addToCart(product);

    this.setState({
      isAdded: true
    });
  };

  render() {

    const { isAdded } = this.state;
    const { title, slug, author, description, price, image } = this.props.product;

    const buttonText = isAdded ? 'Added!' : 'Add to cart';

    return (
      <main>
        <PageTitle title={title} leftColor='#343144' rightColor='#4ebbd2' />
        <Container style={{ marginTop: '20px' }}>
          <Grid columns={2}>
            <Grid.Column>
              <Image src={image} />
            </Grid.Column>
            <Grid.Column>
              <h3>{title}</h3>
              <h3 style={{ fontSize: '1rem', marginTop: 0 }}>{author}</h3>
              <p>{description}</p>
              <h4 style={{ fontSize: '1.5rem' }}>${price}</h4>
              <Button primary onClick={this.handleCartButton}>{buttonText}</Button>
            </Grid.Column>
          </Grid>
        </Container>
      </main>
    );
  }
};

const mapStateToProps = (state) => {
  return {
      product: state.product,
      cart: state.cart
  };
};

export default connect(mapStateToProps, {
  fetchProductBySlug,
  addToCart
})(withRouter(Details));