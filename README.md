# Todo API

The **Todo API** is a RESTful API built with Node.js and Express.js. It allows users to manage their daily tasks by creating, retrieving, updating, and deleting todo items.

The project also implements middleware for request logging, input validation using Joi, CORS configuration, and a Global error handling.

## Technologies Used

- **Node.js** – JavaScript runtime environment.
- **Express.js** – Web framework for building RESTful APIs.
- **CORS** – Handles Cross-Origin Resource Sharing.
- **Joi** – Validates incoming request data.
- **JavaScript** – Programming language.

## Features

- Retrieve all todo tasks.
- Retrieve a single todo by its ID.
- Create a new todo.
- Retrieve active (incomplete) todos.
- Update an existing todo using PATCH.
- Delete a todo by its ID.
- Validate incoming requests using Joi.
- Log incoming HTTP requests using custom middleware.
- Handle errors using Global error-handling middleware.
- Configure CORS to allow requests from the frontend.

## Project Structure

```text
TODO-API/
│
├── middlewares/
│   ├── logger.js
│   ├── validator.js
│   └── errorHandler.js
│
├── node_modules/
│
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

## Installation and Setup

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone <your-github-repository-https://github.com/BigMayor001/Week3-Crud-Todo-API>
```

### 2. Navigate to the Project Directory

```bash
cd TODO-API
```

### 3. Install Dependencies

```bash
npm install
```

If the dependencies are not already listed in your package.json, install them using:

```bash
npm install express cors joi
```

### 4. Start the Server

```bash
node app.js
```

The server will run on:

```text
http://localhost:3001
```

Expected terminal output:

```text
Server is running on port 3001...
```

### 5. Live API Deployment

The Todo API is deployed on Render and is accessible online.

Live API URL: https://week3-crud-todo-api-8u84.onrender.com

## Available Live Endpoints

**Get All Todos

**Get Active Todos

## API Endpoints

Base URL: `http://localhost:3001`

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/todos` | Retrieve all todos |
| GET | `/todos/:id` | Retrieve a todo by ID |
| POST | `/todos` | Create a new todo |
| GET | `/todos/active` | Retrieve active todos |
| PATCH | `/todos/:id` | Update a todo by ID |
| DELETE | `/todos/:id` | Delete a todo by ID |

## API Usage and Examples

### 1. Get All Todos

**GET** `/todos`

Returns all available todo items.

### 2. Get a Single Todo

**GET** `/todos/1`

Returns a todo with the specified ID.

### 3. Create a New Todo

**POST** `/todos`

Request Body:

```json
{
  "task": "Complete backend development assignment"
}
```

Successful Response: `201 Created`

```json
{
  "id": 6,
  "task": "Complete backend development assignment",
  "completed": false
}
```

### 4. Get Active Todos

**GET** `/todos/active`

Returns todo items that have not been completed.

### 5. Update a Todo

**PATCH** `/todos/1`

Request Body:

```json
{
  "task": "Complete Node.js project",
  "completed": true
}
```

Successful Response: `200 OK`

### 6. Delete a Todo

**DELETE** `/todos/1`

Deletes the todo with the specified ID.

Successful Response: `204 No Content`

## Middleware

The project uses custom middleware to improve API functionality and request management.

- **Logger Middleware (`logger.js`):** Logs incoming HTTP requests.
- **Validation Middleware (`validator.js`):** Validates request data using Joi before processing POST and PATCH requests.
- **Error Handler Middleware (`errorHandler.js`):** Handles application errors and sends appropriate error responses.

## CORS Configuration

The API is configured to accept requests from the following frontend origin:

```javascript
http://localhost:3001
```

## Testing

You can test the API endpoints using **Postman** or any API testing tool.

Test the following operations:

- GET all todos.
- GET a todo by ID.
- POST a new todo.
- GET active todos.
- PATCH an existing todo.
- DELETE a todo.

## Future Improvements

- Integrate a database such as MongoDB.
- Implement user authentication and authorization.
- Add pagination and filtering.
- Improve API documentation with Swagger.
- Add automated tests.

## Author

**Oluwamayowa Sunmonu**

Backend Developer | Human Resource Professional

---

*Built with Node.js and Express.js as part of my Advanced backend development learning journey.*