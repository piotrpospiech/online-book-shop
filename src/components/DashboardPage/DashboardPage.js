import React from 'react';
import { Menu, Input, Segment, Container } from 'semantic-ui-react';

import PageTitle from '../PageTitle/PageTitle';

const Dashboard = () => {
  return (
    <main>
      <PageTitle title='dashboard' leftColor='#343144' rightColor='#343144' />
      <Container style={{ marginTop: '20px' }}>
        <Menu>
          <Menu.Item
            name='orders'
          />
          <Menu.Item
            name='completed'
          />
        </Menu>

        {/* <OrdersList /> */}
      </Container>
    </main>
  );
};

export default Dashboard;