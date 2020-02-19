import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Image, Dimmer, Icon, Button } from 'semantic-ui-react';

class ProductCard extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {

    const { active } = this.state;
    const { image, title, slug, author, price } = this.props.product;

    const content = (
      <div>
        <Icon size='big' name='search' />
        <br />
        <Button 
          as={Link} 
          to={`/details/${slug}`}
          style={{ marginTop: '20px' }}
        >
          Details
        </Button>
      </div>
    );

    return (
      <article>
        <Dimmer.Dimmable 
        as={Image} 
        src={image} 
        dimmed={active}
        blurring
        dimmer={{ active, content }}
        onMouseEnter={this.handleShow}
        onMouseLeave={this.handleHide}
        />
        <Segment>
          <h3 style={{ margin: 0 }}>{title}</h3>
          <h5 style={{ marginTop: 0 }}>{author}</h5>
          <span>${price}</span>
        </Segment>
      </article>
    );
  }
}

export default ProductCard;