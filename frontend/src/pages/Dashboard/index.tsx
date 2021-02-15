import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/create">New Product</Link>
      <Products>
        {products.map(product => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div>
              <strong>{product.name}</strong>
              <p>{product.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Products>
    </Container>
  );
};

export default Dashboard;
