import React from 'react';
import { Responsive } from 'semantic-ui-react';

const PageTitle = (props) => {

  const { leftColor, rightColor, title } = props;

  const headerStyle = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    textTransform: 'uppercase'
  }

  return (
    <header 
      style={{ 
        backgroundImage: `linear-gradient(to right, ${leftColor}, ${rightColor})`,
        position: 'relative',
        height: '15rem'
      }}
    >
    <Responsive {...Responsive.onlyMobile}>
      <h1
        style={{
          ...headerStyle,
          fontSize: '2.5rem'
        }}
      >
        {title}
      </h1>
    </Responsive>
    <Responsive {...Responsive.onlyTablet}>
      <h1
        style={{
          ...headerStyle,
          fontSize: '3rem'
        }}
      >
        {title}
      </h1>
    </Responsive>
    <Responsive {...Responsive.onlyComputer}>
      <h1
        style={{
          ...headerStyle,
          fontSize: '4rem'
        }}
      >
        {title}
      </h1>
    </Responsive>
    </header>
  );
};

export default PageTitle;