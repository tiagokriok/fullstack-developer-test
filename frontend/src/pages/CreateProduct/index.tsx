import React, { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import api from '../../services/api';

import { Header, Button, Content } from './styles';

const CreateProduct: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState(String);
  const [description, setDescription] = useState(String);
  const [dueDate, setDueDate] = useState(Date);
  const [price, setPrice] = useState(String);
  const [quantity, setQuantity] = useState(String);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      name,
      description,
      dueDate,
      price,
      quantity,
    };

    await api.post('/products', data);

    history.push('/');
  }

  return (
    <>
      <Header>
        <h1>Create Product</h1>
        <Link to="/">
          <FiChevronLeft size={16} />
          Back
        </Link>
      </Header>
      <Content>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Product Name
            <input
              id="name"
              name="name"
              type="text"
              onChange={event => setName(event.target.value)}
              placeholder="Product Name"
              autoComplete="off"
            />
          </label>
          <label htmlFor="description">
            Description
            <input
              id="description"
              name="description"
              type="text"
              onChange={event => setDescription(event.target.value)}
              placeholder="Description"
              autoComplete="off"
            />
          </label>
          <label htmlFor="duedate">
            Due Date
            <input
              id="duedate"
              name="duedate"
              type="date"
              onChange={event => setDueDate(event.target.value)}
              autoComplete="off"
            />
          </label>
          <label htmlFor="price">
            Price
            <input
              id="price"
              name="price"
              type="text"
              placeholder="Price"
              onChange={event => setPrice(event.target.value)}
              autoComplete="off"
            />
          </label>
          <label htmlFor="quantity">
            Quantity
            <input
              id="quantity"
              name="quantity"
              type="text"
              onChange={event => setQuantity(event.target.value)}
              placeholder="Quantity"
              autoComplete="off"
            />
          </label>
          <Button type="submit">Save</Button>
        </form>
      </Content>
    </>
  );
};

export default CreateProduct;
