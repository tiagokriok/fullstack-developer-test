import request from 'supertest';
import { Connection, getRepository, getConnection } from 'typeorm';
import createConnection from '../database';

import Product from '../models/Product';

import app from '../app';

let connection: Connection;

describe('Product', () => {
  beforeAll(async () => {
    connection = await createConnection('test-connection');

    await connection.query('DELETE FROM migrations');
    await connection.query('DROP TABLE IF EXISTS products');

    await connection.runMigrations();
  });

  beforeEach(async () => {
    await connection.query('DELETE FROM products');
  });

  afterAll(async () => {
    const mainConnection = getConnection();

    await connection.close();
    await mainConnection.close();
  });

  it('should be able to create a new Product', async () => {
    const productsRepository = getRepository(Product);

    const response = await request(app).post('/products').send({
      name: 'Cookie',
      description:
        'A cookie is a baked or cooked food that is typically small, flat and sweet',
      dueDate: '2021-11-18',
      price: 1.99,
      quantity: 1500,
    });

    const product = await productsRepository.findOne({
      where: {
        name: 'Cookie',
      },
    });

    expect(product).toBeTruthy();
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(
      expect.objectContaining({
        id: expect.any(String),
      }),
    );
  });

  it('should be able to list all products', async () => {
    await request(app).post('/products').send({
      name: 'Cookie',
      description:
        'A cookie is a baked or cooked food that is typically small, flat and sweet',
      dueDate: '2021-11-18',
      price: 1.99,
      quantity: 1500,
    });

    await request(app).post('/products').send({
      name: 'Bread',
      description:
        'a kind of food made of flour or meal that has been mixed with milk or water',
      dueDate: '2021-11-18',
      price: 10,
      quantity: 1000,
    });

    await request(app).post('/products').send({
      name: 'Spam',
      description:
        'meat from the upper part of a pigs leg salted and dried or smoked.',
      dueDate: '2021-11-18',
      price: 1.99,
      quantity: 1500,
    });

    const response = await request(app).get('/products');
    expect(response.body).toHaveLength(3);
    expect(response.status).toBe(200);
  });

  it('should be able to list one product', async () => {
    const response = await request(app).post('/products').send({
      name: 'Cookie',
      description:
        'A cookie is a baked or cooked food that is typically small, flat and sweet',
      dueDate: '2021-11-18',
      price: 1.99,
      quantity: 1500,
    });

    const responseProduct = await request(app).get(
      `/products/${response.body.id}`,
    );

    expect(responseProduct.status).toBe(200);
    expect(responseProduct.body).toMatchObject(
      expect.objectContaining({
        id: expect.any(String),
      }),
    );
  });

  it('should be able to update a product', async () => {
    const productsRepository = getRepository(Product);

    const response = await request(app).post('/products').send({
      name: 'Bread',
      description:
        'a kind of food made of flour or meal that has been mixed with milk or water',
      dueDate: '2021-11-18',
      price: 10,
      quantity: 1000,
    });

    const productUpdated = await request(app)
      .put(`/products/${response.body.id}`)
      .send({
        name: 'Bread',
        description:
          'a kind of food made of flour or meal that has been mixed with milk or water',
        dueDate: '2021-11-18',
        price: 5,
        quantity: 1000,
      });

    const product = await productsRepository.findOne(response.body.id);

    expect(product).toBeTruthy();
    expect(product?.price).toBe('5.00');
    expect(productUpdated.status).toBe(200);
  });

  it('should be able to delete a product', async () => {
    const productsRepository = getRepository(Product);

    const response = await request(app).post('/products').send({
      name: 'Bread',
      description:
        'a kind of food made of flour or meal that has been mixed with milk or water',
      dueDate: '2021-11-18',
      price: 10,
      quantity: 1000,
    });

    const deletedResponse = await request(app).delete(
      `/products/${response.body.id}`,
    );

    const product = await productsRepository.findOne(response.body.id);

    expect(product).toBeFalsy();
    expect(deletedResponse.status).toBe(204);
  });
});
