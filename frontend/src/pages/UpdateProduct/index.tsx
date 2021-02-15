import React, { FormEvent, useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import api from '../../services/api';
import formatDate from '../../utils/formatDate';

import { Header, Button, Content } from './styles';

interface ProductParameters {
  id: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  dueDate: string;
  price: number;
  quantity: number;
}

const UpdateProduct: React.FC = () => {
  const [product, setProduct] = useState<Product>();
  const params = useParams<ProductParameters>();
  const history = useHistory();

  useEffect(() => {
    api.get(`products/${params.id}`).then(response => {
      setProduct(response.data);
    });
  }, [params.id]);

  const [name, setName] = useState(String);
  const [description, setDescription] = useState(String);
  const [dueDate, setDueDate] = useState(Date);
  const [price, setPrice] = useState(String);
  const [quantity, setQuantity] = useState(String);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = {
      name: name || product?.name,
      description: description || product?.description,
      dueDate: formatDate(new Date(dueDate)) || product?.dueDate,
      price: Number(price) || product?.price,
      quantity: Number(quantity) || product?.quantity,
    };

    await api.put(`/products/${params.id}`, data);

    history.push(`/product/${params.id}`);
  }

  return (
    <>
      <Header>
        <h1>Update Product</h1>
        <Link to={`/product/${params.id}`}>
          <FiChevronLeft size={16} />
          Back
        </Link>
      </Header>
      <Content>
        {product && (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              Product Name
              <input
                id="name"
                name="name"
                type="text"
                defaultValue={product.name}
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
                defaultValue={product.description}
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
                defaultValue={formatDate(new Date(product.dueDate))}
                onChange={event => setDueDate(event.target.value)}
              />
            </label>
            <label htmlFor="price">
              Price
              <input
                id="price"
                name="price"
                type="text"
                placeholder="Price"
                defaultValue={product.price}
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
                defaultValue={product.quantity}
                onChange={event => setQuantity(event.target.value)}
                placeholder="Quantity"
                autoComplete="off"
              />
            </label>
            <Button type="submit">Save</Button>
          </form>
        )}
      </Content>
    </>
  );
};

export default UpdateProduct;
