import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Container, Title, Products } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Title>List of Products</Title>
      <a href="test">New Product</a>
      <Products>
        <a href="test">
          <div>
            <strong>Cookie</strong>
            <p>Cookie Description</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <div>
            <strong>Bread</strong>
            <p>Bread Description</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <div>
            <strong>Pizza</strong>
            <p>Pizza Description</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Products>
    </Container>
  );
};

export default Dashboard;
