/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import {
  FiChevronLeft,
  FiEdit,
  FiTrash2,
  FiCalendar,
  FiDollarSign,
  FiArchive,
} from 'react-icons/fi';

import api from '../../services/api';
import formatPrice from '../../utils/formatPrice';

import { Header, ProductDetail, Container } from './styles';

interface ProductParameters {
  id: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  dueDate: Date;
  price: number;
  quantity: number;
  created_at: Date;
  updated_at: Date;
}

const Product: React.FC = () => {
  const [product, setProduct] = useState<Product>();
  const [buttonClicked, setButtonClicked] = useState(false);
  const params = useParams<ProductParameters>();

  const history = useHistory();

  useEffect(() => {
    api.get(`products/${params.id}`).then(response => {
      setProduct(response.data);
    });
  }, [params.id]);

  async function handleDeleteProduct() {
    await api.delete(`products/${params.id}`);

    history.push('/');
  }

  return (
    <>
      <Header>
        <h1>Product Details</h1>
        <Link to="/">
          <FiChevronLeft size={16} />
          Back
        </Link>
      </Header>
      {product && (
        <ProductDetail>
          <header>
            <div>
              <strong>{product.name}</strong>
              <p>{product.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>
                {new Date(product.dueDate).toLocaleDateString('pt-BR')}
              </strong>
              <span>
                Due Date
                <FiCalendar size={16} />
              </span>
            </li>
            <li>
              <strong>{formatPrice(product.price)}</strong>
              <span>
                Price
                <FiDollarSign size={16} />
              </span>
            </li>
            <li>
              <strong>{product.quantity}</strong>
              <span>
                Quantity
                <FiArchive size={16} />
              </span>
            </li>
            <li>
              <strong>
                {new Date(product.created_at).toLocaleDateString('pt-BR')}
              </strong>
              <span>
                Created Date
                <FiCalendar size={16} />
              </span>
            </li>
            <li>
              <strong>
                {new Date(product.updated_at).toLocaleDateString('pt-BR')}
              </strong>
              <span>
                Updated Date
                <FiCalendar size={16} />
              </span>
            </li>
          </ul>
        </ProductDetail>
      )}

      <Container>
        {product && (
          <Link to={`/update/${product.id}`}>
            Update
            <FiEdit size={20} />
          </Link>
        )}
        {buttonClicked ? (
          <div id="deleteContainer">
            <button id="yesBtn" type="button" onClick={handleDeleteProduct}>
              YES
            </button>
            <button
              id="noBtn"
              type="button"
              onClick={() => setButtonClicked(false)}
            >
              NO
            </button>
          </div>
        ) : (
          <div>
            <button type="button" onClick={() => setButtonClicked(true)}>
              Delete
              <FiTrash2 size={20} />
            </button>
          </div>
        )}
      </Container>
    </>
  );
};

export default Product;
