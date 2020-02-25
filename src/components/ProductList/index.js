import React, { Component } from 'react';
import { Container, Grid, Responsive } from 'semantic-ui-react';

import ProductCard from '../ProductCard';

class ProductList extends Component {

  renderProducts(products, columns) {

    const { admin } = this.props;

    let rows = [[]];
    let rowIndex = 0;

    if (columns === 1) {
      return products.map((product, index) => {
        return (
          <Grid.Row key={`row-${index}`}>
            <Grid.Column textAlign='center'>
              {
                admin ? (
                  <ProductCard admin product={product} />
                ) : (
                  <ProductCard product={product} />
                )
              }
            </Grid.Column>
          </Grid.Row>
        );
      })
    }
    else {
      for (let i = 0; i < products.length; i++) {
        if (i % columns < columns - 1) {
          rows[rowIndex].push(products[i]);
        } 
        else {
          rows[rowIndex].push(products[i]);
          rows.push([]);
          rowIndex++;
        }
      }

      return rows.map((row, index) => {
        return (
          <Grid.Row key={`row-${index}`} columns={columns}>
            {
              row.map((product, index) => {
                return (
                  <Grid.Column key={`column-${index}`} textAlign='center'>
                    {
                      admin ? (
                        <ProductCard admin product={product} />
                      ) : (
                        <ProductCard product={product} />
                      )
                    }
                  </Grid.Column>
                )
              })
            }
          </Grid.Row>
        );
      });
    }
  };

  render() {

    const { products } = this.props;

    return (
      <Container style={{ marginTop: '20px' }}>
        <Responsive as={Grid} {...Responsive.onlyMobile}>
          {this.renderProducts(products, 1)}
        </Responsive>
        <Responsive as={Grid} {...Responsive.onlyTablet}>
          {this.renderProducts(products, 3)}
        </Responsive>
        <Responsive as={Grid} {...Responsive.onlyComputer}>
          {this.renderProducts(products, 4)}
        </Responsive>
      </Container>
    );
  }
};

export default ProductList;