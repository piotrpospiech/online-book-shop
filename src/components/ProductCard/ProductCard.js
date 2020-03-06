import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Image, Dimmer, Icon, Button, Responsive } from 'semantic-ui-react';

class ProductCard extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  renderCard = () => {

    const { active } = this.state;
    const { image, title, slug, author } = this.props.product;
    const { admin } = this.props;
    let { price } = this.props.product;
    price = price.toFixed(2);

    const buttonText = admin ? 'Edit' : 'Details';
    const goTo = admin ? `edit/${slug}` : `details/${slug}`;

    const content = (
      <div>
        <Icon size='big' name='search' />
        <br />
        <Button 
          color='teal'
          as={Link} 
          to={goTo}
          style={{ marginTop: '20px' }}
        >
          {buttonText}
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
    )
  };

  renderMobileCard = () => {

    const { image, title, slug, author, price } = this.props.product;
    const { admin } = this.props;

    const buttonText = admin ? 'Edit' : 'Details';
    const goTo = admin ? `edit/${slug}` : `details/${slug}`;

    return (
      <article>
        <Image 
          src={image} 
          onMouseEnter={this.handleShow}
          onMouseLeave={this.handleHide}
        />
        <Segment>
          <h3 style={{ margin: 0 }}>{title}</h3>
          <h5 style={{ marginTop: 0 }}>{author}</h5>
          <span>${price}</span><br />
          <Button 
            color='teal'
            style={{ marginTop: 20 }}
            as={Link} 
            to={goTo}
          >
            {buttonText}
          </Button>
        </Segment>
      </article>
    )
  };

  render() {
    return (
      <Fragment>
        <Responsive {...Responsive.onlyMobile}>
          {this.renderMobileCard()}
        </Responsive>
        <Responsive {...Responsive.onlyTablet}>
          {this.renderCard()}
        </Responsive>
        <Responsive {...Responsive.onlyComputer}>
          {this.renderCard()}
        </Responsive>
       
      </Fragment>
    );
  }
}

export default ProductCard;