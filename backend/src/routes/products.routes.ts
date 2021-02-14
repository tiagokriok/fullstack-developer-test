import { Router } from 'express';
import { getRepository } from 'typeorm';
import { parseISO } from 'date-fns';

import Product from '../models/Product';

const productsRouter = Router();

productsRouter.get('/', async (request, response) => {
  const productsRepository = getRepository(Product);

  const products = await productsRepository.find();

  return response.status(200).json(products);
});

productsRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const productsRepository = getRepository(Product);

  const product = await productsRepository.findOneOrFail(id);

  return response.status(200).json(product);
});

productsRouter.post('/', async (request, response) => {
  const { name, description, dueDate, price, quantity } = request.body;

  const parsedDueDate = parseISO(dueDate);

  const productsRepository = getRepository(Product);

  const data = {
    name,
    description,
    dueDate: parsedDueDate,
    price,
    quantity,
  };

  const product = productsRepository.create(data);

  await productsRepository.save(product);

  return response.status(201).json(product);
});

productsRouter.put('/:id', async (request, response) => {
  const { id } = request.params;

  const { name, description, dueDate, price, quantity } = request.body;

  const parsedDueDate = parseISO(dueDate);

  const productsRepository = getRepository(Product);

  const data = {
    name,
    description,
    dueDate: parsedDueDate,
    price,
    quantity,
  };

  await productsRepository.update(id, data);

  return response.status(200).json(data);
});

productsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const productsRepository = getRepository(Product);

  await productsRepository.delete(id);

  return response.status(204).send();
});

export default productsRouter;
