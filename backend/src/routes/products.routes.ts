import { Router } from 'express';

const productsRouter = Router();

productsRouter.get('/', (request, response) => {
  return response.json({ endpoint: 'List Products' });
});

productsRouter.get('/:id', (request, response) => {
  return response.json({ endpoint: 'Show Product' });
});

productsRouter.post('/', (request, response) => {
  return response.json({ endpoint: 'Store Product' });
});

productsRouter.put('/:id', (request, response) => {
  return response.json({ endpoint: 'Update Product' });
});

productsRouter.delete('/:id', (request, response) => {
  return response.json({ endpoint: 'Delete Product' });
});

export default productsRouter;
