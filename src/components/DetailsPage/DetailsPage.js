import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { Container, Grid, Image, Button, Responsive } from 'semantic-ui-react';

import { fetchProductBySlug } from '../../store/actions';

import PageTitle from '../PageTitle/PageTitle';

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

    // this.props.addToCart(product);

    this.setState({
      isAdded: true
    });
  };

  renderProductText = (textAlign, addPriceMargin) => {

    const { isAdded } = this.state;
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
          <Button primary onClick={this.handleCartButton}>{buttonText}</Button>
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
            {this.renderProductText('center', true)}
          </Responsive>
          <Responsive as={Grid} columns={2} {...Responsive.onlyTablet}>
            {this.renderProductText('left', false)}
          </Responsive>
          <Responsive as={Grid} columns={2} {...Responsive.onlyComputer}>
            {this.renderProductText('left', false)}
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