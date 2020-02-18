import React, { Fragment } from 'react';
import { Segment, Image } from 'semantic-ui-react';

const Product = (props) => {

  const { image, title, author, price } = props.product;

  return (
    <Fragment>
      <Image src={image} />
      <Segment>
        <h3 style={{ margin: 0 }}>{title}</h3>
        <h5 style={{ marginTop: 0 }}>{author}</h5>
        <span>${price}</span>
      </Segment>
    </Fragment>
  );
};

export default Product;