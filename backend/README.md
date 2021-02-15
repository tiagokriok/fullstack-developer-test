# Instructions

1. Run `yarn` on terminal, to install all dependencies.
2. The database I'm using is PostgreSQL, so first create a database. Then create a file called `ormconfig.json`, use the file `example.ormconfig.json` as a base.
3. Run `yarn typeorm migration:run` to migrate and create the Product Table, if an error occurs when creating the table, first you will have to install the extension, uuid-ossp, in the database and run again the command.
4. To start the Backend project run `yarn dev:server`.
5. The server will run in the port 3333.

## Unit Tests

There is five tests, one to each endpoint.

- To run the tests: `yarn test`

1. **`should be able to create a new Product`**: For this test to pass, the application has to create a new Product and return the Product.
2. **`should be able to list all products`**: For this test to pass, the application has to return a list of all Products.
3. **`should be able to list one product`**: For this test to pass, the application has to return a list of one Product.
4. **`should be able to update a product`**: For this test to pass, the application has to update the Product and return the Product Updated.
5. **`should be able to delete a product`**: For this test to pass, the application has to delete the Product and return no content.

## API Endpoints

- **`GET /products`**: This endpoint return a list of all Products stored in the database.

  ```json
    [
      {
        "id": "7a6ababf-8654-434c-8112-9863eb678c19",
        "name": "Pizza",
        "description": "ish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients",
        "dueDate": "2021-02-15T04:00:00.000Z",
        "price": "5.00",
        "quantity": 789,
        "created_at": "2021-02-15T07:23:15.726Z",
        "updated_at": "2021-02-15T07:23:15.726Z"
      },
      {
        "id": "3076c1c5-38aa-4829-abac-1c60c0c945c0",
        "name": "Cookie",
        "description": "Cookie",
        "dueDate": "2021-02-15T04:00:00.000Z",
        "price": "5.50",
        "quantity": 1596,
        "created_at": "2021-02-14T20:18:52.138Z",
        "updated_at": "2021-02-15T10:30:16.924Z"
      },
    ]
  ```

- **`GET /products/:id`**: This endpoint return a list of one product, specified in the route with the id.

  ```json
      {
        "id": "642a4729-4286-4684-b3e7-c1e9ac9f1632",
        "name": "Cookie",
        "description": "A cookie is a baked or cooked food that is typically small, flat and sweet",
        "dueDate": "2021-03-03T04:00:00.000Z",
        "price": "5.99",
        "quantity": 1,
        "created_at": "2021-02-14T08:31:40.641Z",
        "updated_at": "2021-02-14T09:12:24.012Z"
      }
  ```

- **`POST /products`**: This endpoint receive the `name`, `description`, `dueDate`, `price` and `quantity` inside the request body. The retunr must be like.

  ```json
      {
        "name": "Spam",
        "description": "meat from the upper part of a pigs leg salted and dried or smoked.",
        "dueDate": "2021-11-18T04:00:00.000Z",
        "price": 10,
        "quantity": 1000,
        "id": "5469e087-977b-4187-a817-1f5367efc1a8",
        "created_at": "2021-02-14T20:19:08.912Z",
        "updated_at": "2021-02-14T20:19:08.912Z"
      }
  ```

- **`PUT /products/:id`**: This endpoint receive the `name`, `description`, `dueDate`, `price` and `quantity` inside the request body, with the field that will be updated. The return must be the Product updated.
- **`DELETE /products/:id`**: This endpoint must delete a Product with the `id`specified in the route parameters and return status `204`, no content.
