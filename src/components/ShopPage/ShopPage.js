import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../../store/actions/products/productsActions';

import PageTitle from '../PageTitle/PageTitle';
import ProductList from '../ProductList/ProductList';

class Shop extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {

    const products = this.props.products;

    return (
      <main>
        <PageTitle title='shop' leftColor='#343144' rightColor='#4ebbd2' />
        <ProductList products={products} />
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
})(Shop);
