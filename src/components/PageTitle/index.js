import React from 'react';

const PageTitle = (props) => {

  const { leftColor, rightColor, title } = props;

  return (
    <header 
      style={{ 
        backgroundImage: `linear-gradient(to right, ${leftColor}, ${rightColor})`,
        position: 'relative',
        height: '15rem'
      }}
    >
      <h1
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#fff',
          fontSize: '4rem',
          textTransform: 'uppercase'
        }}
      >{title}</h1>
    </header>
  );
};

export default PageTitle;