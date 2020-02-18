import React, { Component } from 'react';

import PageTitle from '../PageTitle';
import ProductList from '../ProductList';

import { products } from './products';

class Shop extends Component {

  render() {

    return (
      <div>
        <PageTitle title='shop' leftColor='#343144' rightColor='#4ebbd2' />
        <ProductList products={products} />
      </div>
    );
  }
};

export default Shop;