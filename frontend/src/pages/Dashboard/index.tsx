import React, { useState, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import { Container, Title, Products } from './styles';

interface Product {
  id: string;
  name: string;
  description: string;
}

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Container>
      <Title>List of Products</Title>
      <a href="test">New Product</a>
      <Products>
        {products.map(product => (
          <a key={product.id} href="test">
            <div>
              <strong>{product.name}</strong>
              <p>{product.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Products>
    </Container>
  );
};

export default Dashboard;
