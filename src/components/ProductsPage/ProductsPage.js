import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { fetchProducts } from '../../store/actions/products/productsActions';

import PageTitle from '../PageTitle/PageTitle';
import ProductList from '../ProductList/ProductList';

class ProductsPage extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {

    const products = this.props.products;

    return (
      <main>
        <PageTitle title='products' leftColor='#343144' rightColor='#343144' />
        <Container style={{ marginTop: '20px', height: '36px' }}>
          <Button as={Link} to='/admin-panel/add' floated='right' primary>Add new</Button>
        </Container>
        <ProductList admin products={products} />
      </main>
    );
  }
};

const mapStateToProps = (state) => {
  return {
      products: state.products
  };
};

export default connect(mapStateToProps, {
  fetchProducts
})(ProductsPage);
